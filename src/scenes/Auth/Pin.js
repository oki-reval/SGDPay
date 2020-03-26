import React from 'react';
import { View, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { Loading } from '_molecules';
import { PinStatus } from '_organisms';

class Pin extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                source: '',
                loading: false,
                success: false,
                failed: false,
                error: false,
                title: '',
                subtitle: ''
            }
    }

    componentDidMount() {
        this.getFrame()
    }

    getFrame = () => {
        this.setState({loading: true})
        axios.post(`/manage/pin`, {
            account_no: this.props.wallet.no_rekening,
            type: 'change'
        })
            .finally(() => this.setState({ loading: false }))
            .then(res => {
                if (res.data == 'Expected leading [0-9a-fA-F] character but was 0x9') {
                    this.setState({ error: true })
                    return;
                }
                this.setState({ source: res.data.html, error: false })
                console.log(res.data.html)
            }).catch(err => {
                Alert.alert('Error', err.response)
            })
    }

    onMessage = (data) => {
        const status = data.nativeEvent.url.slice(50)
        if (status == 'success') {
            this.setState({ success: true, failed: false, title: 'Selamat!', subtitle: 'Kamu berhasil merubah PIN' })
        } else if (status == 'PinIncorrect::Invalid%20PIN') {
            this.setState({ success: true, failed: true, title: 'Ooops!', subtitle: 'PIN yang kamu masukan sepertinya keliru, silahkan coba lagi' })
        } else {
            this.setState({ success: true, failed: true, title: 'Ooops!', subtitle: status })
        }
    }

    render() {
        const { loading, success, failed, title, subtitle, error } = this.state
        if (success) {
            return (
                <PinStatus title={title} subtitle={subtitle} failed={failed} onPress={() => this.props.navigation.navigate('Profile')} />
            )
        }
        if (error) {
            return (
                <View style={{flex: 1}}>
                    <Loading isLoading={loading} />
                    <PinStatus title={'Ooops!'} subtitle={'Terjadi kesalahan sistem, silahkan coba lagi.'} buttonTittle='RELOAD' failed onPress={this.getFrame} />
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