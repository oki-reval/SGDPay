import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, ScrollView, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { HeaderProfile } from '_molecules';
import { Card } from '_atoms';
import QRCode from 'react-native-qrcode-svg';
import { connect } from 'react-redux';
import { getUser } from '_states/actions/user';

const Profile = (props) => {

    const qrcode = {
        type: 'transfer',
        value: props.wallet.no_rekening
    }

    const getUsers = () => {
        props.dispatch(getUser())
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
            <Card style={{ margin: 10, marginTop: 40, width: width - 80, alignSelf: 'center' }}>
                <QRCode value={JSON.stringify(qrcode)} size={width - 100} />
            </Card>
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
})

const mapStateToProps = state => {
    return {
        user: state.user.data,
        wallet: state.user.wallet,
        loading: state.user.loading,
    }
}

export default connect(mapStateToProps)(Profile);