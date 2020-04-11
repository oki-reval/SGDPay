import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Button, Divider, Input } from '_atoms';
import { color, style } from '_styles';
import { Loading, PulsaDenom } from '_molecules'
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

class PulsaScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Pembelian ${navigation.getParam('type')}`,
        }
    }
    constructor(props) {
        super(props),
            this.state = {
                loading: false,
                phone: '',
                provider: '',
                logo: '',
                status: false,
                packet: [],
                produk: ''

            }
    }

    componentDidMount() {

    }

    autoProvider(phone) {
        this.setState({ phone })
        // if (this.props.navigation.getParam('type') != 'Pulsa') return;
        if (phone.length >= 4) {
            phone = phone.slice(0, 4);
            if (
                phone == '0812' ||
                phone == '0813' ||
                phone == '0821' ||
                phone == '0822' ||
                phone == '0823' ||
                phone == '0851' ||
                phone == '0852' ||
                phone == '0853'
            ) {
                this.setState({ provider: 'TELKOMSEL', status: true, logo: require('_assets/icons/telkomsel.png') })
            }
            else if (
                phone == '0855' ||
                phone == '0856' ||
                phone == '0857' ||
                phone == '0858' ||
                phone == '0814' ||
                phone == '0815' ||
                phone == '0816'
            ) {
                this.setState({ provider: 'INDOSAT', status: true, logo: require('_assets/icons/indosat.png') })

            }
            else if (
                phone == '0838' ||
                phone == '0831' ||
                phone == '0832' ||
                phone == '0833' ||
                phone == '0817' ||
                phone == '0818' ||
                phone == '0819' ||
                phone == '0859' ||
                phone == '0877' ||
                phone == '0878'
            ) {
                this.setState({ provider: 'XL', status: true, logo: require('_assets/icons/xl.png') })
            }
            else if (
                phone == '0895' ||
                phone == '0896' ||
                phone == '0897' ||
                phone == '0898' ||
                phone == '0899'
            ) {
                this.setState({ provider: 'THREE', status: true, logo: require('_assets/icons/three.jpg') })

            }
            else if (
                phone == '0881' ||
                phone == '0882' ||
                phone == '0883' ||
                phone == '0884' ||
                phone == '0885' ||
                phone == '0886' ||
                phone == '0887' ||
                phone == '0888' ||
                phone == '0889'
            ) {
                this.setState({ provider: 'SMARTFREN', status: true, logo: require('_assets/icons/smartfren.png') })

            }
            else {
                this.setState({ provider: '', status: false, logo: '' })
            }
        } else {
            this.setState({ provider: '', status: false, logo: '' })
        }
    }

    render() {
        const { phone, produk, status, provider, logo, packet, loading } = this.state
        return (
            <View style={{ flex: 1 }} >
				<StatusBar translucent={false} backgroundColor={color.primary} barStyle='light-content' />
                <View style={{ flex: 1 }}>
                    <View style={{ padding: 10, flexDirection: 'row' }}>
                        <View style={{flex: 1}}>
                            <Input value={phone} label='Nomor Telepon' logo={logo} onChangeText={(v) => this.autoProvider(v)} keyboardType='number-pad' placeholder='0821XXXXXXXX' />
                        </View>
                        <Icon name='address-book' size={24} color={color.g500} style={{alignSelf: 'flex-end', margin: 10, marginBottom: 13}} />
                    </View>
                    <Divider style={{ marginBottom: 10 }} />
                    {
                        status && <PulsaDenom provider={provider} produk={produk} data={denom} onPress={(produk) => this.setState({ produk })} />
                    }
                </View>
                <View style={styles.footer}>
                    <Button title='Selanjutnya' disabled={phone.length < 10 || !produk} onPress={() => this.props.navigation.navigate('PPOBPayment', { phone, produk })} />
                </View>
                <Loading isLoading={loading} />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: color.g900
    },
    footer: {
        backgroundColor: '#fff',
        padding: 10,
        borderTopWidth: 1,
        borderColor: color.g300
    },
})

const denom = [
    {
        name: '5000',
        nominal: '6000',
    },
    {
        name: '10000',
        nominal: '11000',
    },
    {
        name: '15000',
        nominal: '16000',
    },
    {
        name: '25000',
        nominal: '26000',
    },
    {
        name: '50000',
        nominal: '51000',
    },
    {
        name: '100000',
        nominal: '100000',
    },
]


const mapStateToProps = state => {
    return {
        user: state.user.data,
        wallet: state.user.wallet
    }
}

export default connect(mapStateToProps)(PulsaScreen);