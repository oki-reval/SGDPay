import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { saveUser } from '_states/actions/user';
import { connect } from 'react-redux';
import { Button, Input } from '_atoms'
import { color } from '_styles';

class Intro extends React.Component{
    
    toLogin = async () =>{
        this.props.navigation.navigate('Login')
    }

    toRegister = async () => {
        this.props.navigation.navigate('Register')
    }

    render(){
        return (
            <View  style={styles.wraper,{height: height}} resizeMode='cover'>
                 <StatusBar hidden />
                <View style={styles.wraper}>
                    <Image source={require('_assets/images/pic_auth.png')} style={styles.logo} resizeMode='contain' />
                    <Text style={styles.Text}> Nikmati layanan transaksi keuangan, mulai dari pembayaran, transfer, sampai investasi dari smartphone Anda</Text>
                    <Button title='Login' onPress={this.toLogin} style={[styles.bacgroundButton,{marginBottom: 20}]} />
                    <TouchableOpacity onPress={this.toRegister}>
                        <Text style={[styles.Text,{marginBottom:50}]}> Belum akun SGDPay ? Buat disini</Text>
                    </TouchableOpacity>
                    </View>

                </View>
        )
    }    
}

const { height } = Dimensions.get('screen')

const styles =StyleSheet.create({
    wraper:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logo:{
        width: 250,
        height: 183,
        marginBottom: 50,
        alignSelf: 'center'
    },
    Text: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        bottom:0
    },
    Text_welcome: {
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 24,
        color: 'black',
    },
    bacgroundButton: {
        backgroundColor: 'transparent',
        marginTop: 50
    }

})

export default Intro ;