import React from 'react';
import { View, ImageBackground, Dimensions, Image, StyleSheet, StatusBar, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { saveUser } from '_states/actions/user';
import { connect } from 'react-redux';
import { Button, Input } from '_atoms'
import { color } from '_styles';
import Axios from 'axios';

class Login extends React.Component {
    constructor(props){
        super(props),
        this.state={
            user:{
                username: '1157050149',
                password: 'ramdan'
            },
            loading: false
        }
    }

    handleChange = async (type, val) => {
        const user = Object.assign({}, this.state.user)
        user[type] = val
        this.setState({user})
    }

    login = async () => {
        this.setState({loading: true})
        const user = this.state.user
        Axios.post('/auth/login', user)
            .finally(()=>this.setState({loading: false}))
            .then(res=>{
                AsyncStorage.setItem('token', res.data.access_token)
                this.props.dispatch(saveUser(res.data.user))
                this.props.navigation.navigate('MiddleWare')
            }).catch(err=>{
                Alert.alert('Error', err.message)
                console.log(err)
            })
    }

    render() {
        const { user, loading } = this.state
        const disable = !user.username || user.password.length<6
        return (
            <View style={styles.wraper,{height: height}} resizeMode='cover'>
                <StatusBar hidden />
                <View style={styles.wraper}>
                    <Image source={require('_assets/images/pic_auth.png')} style={styles.logo} resizeMode='contain' />
                    <Input value={user.username} placeholder='Username' icon='user' onChangeText={(val)=>this.handleChange('username', val)} />
                    <Input value={user.password} placeholder='Password' icon='eye-slash' password onChangeText={(val)=>this.handleChange('password', val)} />
                    <Button title='LOGIN' loading={loading} disabled={loading || disable} onPress={this.login} style={{marginTop: 20}} />
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