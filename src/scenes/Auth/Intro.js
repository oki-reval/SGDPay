import React from 'react';
import { View, ImageBackground, Dimensions, Image, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { saveUser } from '_states/actions/user';
import { connect } from 'react-redux';
import { Button, Input } from '_atoms'
import { color } from '_styles';

class Intro extends React.Component{
    
    toLogin = async () =>{
        this.props.navigation.navigate('AuthLogin')
    }

    render(){
        return (
            <ImageBackground source={require('_assets/images/bg.jpg')} style={{height: height}} resizeMode='cover'>
                    <StatusBar hidden />
                    <View style={styles.wraper}>
                        <Image source={require('_assets/images/logo.png')} style={styles.logo} resizeMode='contain' />
                    
                        <Button title='Login' onPress={this.toLogin} style={{marginTop: 20}} />
                    </View>
                </ImageBackground>
        )
    }    
}

const { height } = Dimensions.get('screen')

const styles =StyleSheet.create({
    wraper:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    logo:{
        width: 120,
        height: 120,
        marginBottom: 50,
        alignSelf: 'center'
    }
})

export default Intro ;