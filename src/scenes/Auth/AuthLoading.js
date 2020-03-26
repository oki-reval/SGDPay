import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { color } from '_styles';
import { BarIndicator } from 'react-native-indicators';
import Axios from 'axios';
import { saveUser, saveWallet } from '_states/actions/user';
import { connect } from 'react-redux';

const AuthLoading = (props) => {

    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(val => {
                Axios.defaults.headers.common['Authorization'] = 'Bearer ' + val;
                Axios.defaults.baseURL = 'http://192.168.1.6:8000/api';
                if (val) {
                    props.navigation.navigate('App')
                } else {
                    props.navigation.navigate('Auth')
                }
            })
    }, [])

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(val => {
                props.dispatch(saveUser(JSON.parse(val)))
            })
    }, [])

    useEffect(() => {
        AsyncStorage.getItem('wallet')
            .then(val => {
                props.dispatch(saveWallet(JSON.parse(val)))
            })
    }, [])


    return (
        <View style={styles.wrap}>
            <BarIndicator color={'#fff'} size={30} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: color.primary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(AuthLoading);