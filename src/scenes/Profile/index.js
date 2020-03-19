import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { HeaderProfile } from '_molecules';
import { Card } from '_atoms';
import QRCode from 'react-native-qrcode-svg';
import { connect } from 'react-redux';

const Profile = (props) => {

    const logout = () => {
        AsyncStorage.clear()
        props.navigation.navigate('AuthLogin')
    }

    const toVerif = () => {
        props.navigation.navigate('Verifikasi')
    }

    return (
        <View style={styles.wraper, { height: height }} resizeMode='cover'>
            <HeaderProfile name={props.user.fullname} saldo={props.wallet.saldo} account={props.wallet.no_rekening} />
            <Card style={{margin: 10, marginTop: 40, width: width-80, alignSelf: 'center'}}>
                <QRCode value={props.wallet.no_rekening} size={width-100} />
            </Card>
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Pin')}>
                <Text>Pin</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toVerif}>
                <Text>Verifikasi</Text>
            </TouchableOpacity>
        </View>
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
})

const mapStateToProps = state => {
    return {
        user: state.user.data,
        wallet: state.user.wallet,
    }
}

export default connect(mapStateToProps)(Profile);