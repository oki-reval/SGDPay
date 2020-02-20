import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { color } from '_styles';
import { BarIndicator } from 'react-native-indicators';
import Axios from 'axios';

const AuthLoading = (props) => {

    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(val => {
                Axios.defaults.headers.common['Authorization'] = 'Bearer ' + val;
                Axios.defaults.baseURL = 'http://192.168.1.8:8080/api';
                if (val) {
                    props.navigation.navigate('App')
                } else {
                    props.navigation.navigate('Auth')
                }
            })


    })


    return (
        <View style={styles.wrap}>
            <Text style={styles.Text_welcome}> Selamat Datang </Text>
            <Image source={require('_assets/images/logo.png')} style={styles.logo} resizeMode='contain' />
            <Text style={styles.Text}> Nikmati Transaksi dengan Nyaman dan Aman Kami Hadir untuk Memudahkan semua Aktivitas Transaksi Anda </Text>
            <BarIndicator style={[styles.loading]} color={'#fff'} size={30} />
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
    Text_welcome: {
        alignItems: 'center',
        fontSize: 24,
        color: '#fff',
    },

    Text: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
    },

    logo: {
        height: Dimensions.get('window').height / 5,
        margin: 20
    },
    loading: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    }
})

export default AuthLoading;