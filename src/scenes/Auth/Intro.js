import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, StatusBar } from 'react-native';
import { ButtonGradient, Input } from '_atoms';

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
                    <Text style={[styles.Text,{marginBottom: 50}]}> Nikmati layanan transaksi keuangan, 
                    mulai dari pembayaran, transfer, sampai investasi dari smartphone Anda</Text>                   
                    
                    <ButtonGradient title='LOGIN'  onPress={this.toLogin} style={{marginBottom: 20}} />
                   
                    
                    <Text style={[styles.Text,{marginBottom:50}]} onPress={this.toRegister}> Belum akun SGDPay ? Buat disini</Text>

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
    },
})

export default Intro ;