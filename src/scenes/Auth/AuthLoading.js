import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { color } from '_styles';
import { BarIndicator } from 'react-native-indicators';
import Axios from 'axios';
import { getUser } from '_states/actions/user';
import { connect } from 'react-redux';

const AuthLoading = (props) => {

    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(val => {
                Axios.defaults.headers.common['Authorization'] = 'Bearer ' + val;
                Axios.defaults.baseURL = 'https://sgd.coffeemate.id/api';
                if (val) {
                    getUsers()
                    props.navigation.navigate('App')
                } else {
                    props.navigation.navigate('Auth')
                }
            })
    }, [])

    const getUsers=()=>{
        props.dispatch(getUser())
    }


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