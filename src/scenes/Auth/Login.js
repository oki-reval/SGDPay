import React from 'react';
import { View, ImageBackground, Dimensions, Image, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { saveUser } from '_states/actions/user';
import { connect } from 'react-redux';
import { Button, Input } from '_atoms'
import { color } from '_styles';

class Login extends React.Component {

    login = async () => {
        await AsyncStorage.setItem('auth', 'true')
        this.props.dispatch(saveUser({ name: 'Rizki Fr' }))
        this.props.navigation.navigate('MiddleWare')
    }

    render() {
        return (
            <ImageBackground source={require('_assets/images/bg.jpg')} style={{height: height}} resizeMode='cover'>
                <StatusBar hidden />
                <View style={styles.wraper}>
                    <Image source={require('_assets/images/logo.png')} style={styles.logo} resizeMode='contain' />
                    <Input placeholder='Email' icon='user' />
                    <Input placeholder='Password' icon='eye-slash' password />
                    <Button title='LOGIN' onPress={this.login} style={{marginTop: 20}} />
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

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(Login);