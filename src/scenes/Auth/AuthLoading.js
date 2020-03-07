import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { color } from '_styles';
import { BarIndicator } from 'react-native-indicators';
import Axios from 'axios';

const AuthLoading = (props) => {

    useEffect(() => {
        setTimeout(() =>{
        AsyncStorage.getItem('token')
            .then(val => {
                Axios.defaults.headers.common['Authorization'] = 'Bearer ' + val;
                Axios.defaults.baseURL = 'http://192.168.1.7:8000/api';
                if (val) {
                    props.navigation.navigate('App')
                } else {
                    props.navigation.navigate('Auth')
                }
            })
        },100);
    })


    return (
        <View style={styles.wrap}>
            <BarIndicator  color={'#fff'} size={30} />
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

export default AuthLoading;