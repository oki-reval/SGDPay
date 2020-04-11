import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, ScrollView, RefreshControl, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { HeaderProfile } from '_molecules';
import { Card, Divider } from '_atoms';
import QRCode from 'react-native-qrcode-svg';
import { connect } from 'react-redux';
import { getUser } from '_states/actions/user';
import { color } from '_styles';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

const Profile = (props) => {

    const qrcode = {
        type: 'transfer',
        value: props.wallet.no_rekening
    }

    const logout = () => {
        AsyncStorage.clear()
        props.navigation.navigate('AuthLogin')
    }

    const getUsers = () => {
        props.dispatch(getUser())
    }

    const handlePress = (item) => {
        if (item.param == 'logout') {
            logout()
        } else {
            props.navigation.navigate(item.route, item.param)
        }
    }

    const renderMenu = ({ item }) => {
        if (props.user.verified && item.route == 'Verifikasi') {
            return
        }
        return (
            <TouchableHighlight onPress={() => handlePress(item)}>
                <View style={styles.menu}>
                    <Icon name={item.icon} size={20} style={{ width: 25 }} color={color.g800} />
                    <Text style={{ fontSize: 16, color: color.g800 }}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }


    return (
        <ScrollView
            style={styles.wraper, { height: height }}
            resizeMode='cover'
            refreshControl={
                <RefreshControl
                    refreshing={props.loading}
                    onRefresh={getUsers}
                />
            }
        >
            <HeaderProfile name={props.user.fullname} saldo={props.wallet.saldo} account={props.wallet.no_rekening} />
            <Card style={styles.qrWrapper}>
                <Text style={[styles.qrText, { fontSize: 20, fontWeight: 'bold' }]}>QR Code</Text>
                <QRCode value={JSON.stringify(qrcode)} size={width - 200} />
                <Text style={styles.qrText}>Tunjukan QR Code untuk melakukan transaksi melalui SGDPay</Text>
            </Card>
            <Divider />
            <Text style={styles.conf}>Konfigurasi</Text>
            <FlatList
                data={menu}
                keyExtractor={item => item.name}
                renderItem={renderMenu}
            />
        </ScrollView>
    )

}
const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    qrText: {
        color: color.g700,
        textAlign: 'center',
        marginVertical: 10
    },
    qrWrapper: {
        margin: 10,
        marginTop: 20,
        width: width - 80,
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    menu: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: color.g300,
        backgroundColor: '#fff'
    },
    conf:{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 15,
        color: color.g900
    }
})

const menu = [
    {
        name: 'Verifikasi Akun',
        route: 'Verifikasi',
        param: '',
        icon: 'check-circle'
    },
    {
        name: 'Buat PIN',
        route: 'Pin',
        param: {type: 'create'},
        icon: 'lock'
    },
    {
        name: 'Ganti PIN',
        route: 'Pin',
        param: {type: 'change'},
        icon: 'lock'
    },
    {
        name: 'Reset PIN',
        route: 'Pin',
        param: {type: 'reset'},
        icon: 'lock'
    },
    {
        name: 'Logout',
        route: '',
        param: 'logout',
        icon: 'power-off'
    },
]

const mapStateToProps = state => {
    return {
        user: state.user.data,
        wallet: state.user.wallet,
        loading: state.user.loading,
    }
}

export default connect(mapStateToProps)(Profile);