import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { saveUser } from '_states/actions/user';
import { connect } from 'react-redux';

class Login extends React.Component {

    login=async()=>{
        await AsyncStorage.setItem('auth', 'true')
        this.props.dispatch(saveUser({name: 'Rizki Fr'}))
        this.props.navigation.navigate('MiddleWare')
    }

    render() {
        return (
            <TouchableOpacity onPress={this.login}>
                <Text>Login</Text>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(Login);