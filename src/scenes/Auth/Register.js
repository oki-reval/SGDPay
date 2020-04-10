import React from 'react';
import { View, Dimensions, Image, StyleSheet, StatusBar, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { Button, Input } from '_atoms'
import Axios from 'axios';

class Register extends React.Component {
    constructor(props){
        super(props),
        this.state={
            user:{
                username: '',
                full_name: '',
                password: ''
            },
            loading: false
        }
    }

    handleChange = async (type, val) => {
        const user = Object.assign({}, this.state.user)
        user[type] = val
        this.setState({user})
    }

    register = async () => {
        this.setState({loading: true})
        const user = this.state.user
        Axios.post('/auth/register', user)
            .finally(()=>this.setState({loading: false}))
            .then(res=>{
                AsyncStorage.setItem('token', res.data.access_token)
                this.props.navigation.navigate('MiddleWare')
            }).catch(err=>{
                Alert.alert('Error', err.message)
                console.log(err)
            })
    }

    render() {
        const { user, loading } = this.state
        const disable = !user.username || !user.full_name || user.password.length<6
        let data = [{val: 'Mahasiswa'},{val:'Dosen'},{val:'Pedagang/Lain-Lain'}];
        return (
            <View style={styles.wraper,{height: height}} resizeMode='cover'>
                <StatusBar hidden />
                <View style={styles.wraper}>
                    <Image source={require('_assets/images/pic_auth.png')} style={styles.logo} resizeMode='contain' />
                    <Input placeholder='User Name' icon='user' onChangeText={(val)=>this.handleChange('username', val)} />
                    <Input placeholder='Full Name' icon='user' onChangeText={(val)=>this.handleChange('full_name', val)} />
                    <Input placeholder='Password' icon='eye-slash' password onChangeText={(val)=>this.handleChange('password', val)} />
                    <Button title='REGISTER' loading={loading} disabled={loading || disable} onPress={this.register} style={{marginTop: 20}} />
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

export default connect(mapStateToProps)(Register);