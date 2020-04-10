import React from 'react';
import { View, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { getUser } from '_states/actions/user';
import { connect } from 'react-redux';
import { Loading } from '_molecules';
import { TransferStatus } from '_organisms';

class Pin extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                source: props.navigation.getParam('html'),
                data: props.navigation.getParam('data'),
                loading: false,
                success: false,
                failed: false,
                error: false,
                title: '',
                subtitle: ''
            }
    }

    onMessage = (data) => {
        const status = data.nativeEvent.url.slice(50)
        if (status == 'success') {
            this.getUsers()
            this.setState({ success: true, failed: false, title: 'Selamat!', subtitle: 'Kamu berhasil merubah PIN' })
        } else if (status == 'PinIncorrect::Invalid%20PIN') {
            this.setState({ success: true, failed: true, title: 'Ooops!', subtitle: 'PIN yang kamu masukan sepertinya keliru, silahkan coba lagi' })
        } else {
            this.setState({ success: true, failed: true, title: 'Ooops!', subtitle: status })
        }
    }

    getUsers=()=>{
        this.props.dispatch(getUser())
    }

    render() {
        const { loading, success, failed, title, subtitle, error } = this.state
        if (success) {
            return (
                <TransferStatus data={this.state.data} failed={failed} onPress={() => this.props.navigation.navigate('Home')} />
            )
        }
        if (error) {
            return (
                <View style={{flex: 1}}>
                    <TransferStatus data={this.state.data} buttonTittle='RELOAD' failed onPress={() => this.props.navigation.navigate('Home')} />
                </View>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                <WebView injectedJavaScript={SCRIPT} onError={(data) => this.onMessage(data)} source={{ html: this.state.source }} />
                <Loading isLoading={loading} />
            </View>
        )
    }
}

const SCRIPT = `
    const meta = document.createElement('meta');
    meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0');
    meta.setAttribute('name', 'viewport');
    document.head.appendChild(meta);
`;

const mapStateToProps = state => {
    return {
        user: state.user.data,
        wallet: state.user.wallet
    }
}

export default connect(mapStateToProps)(Pin);