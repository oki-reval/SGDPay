import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = (props) => {

    const logout = () => {
        AsyncStorage.clear()
        props.navigation.navigate('AuthLogin')
    }

    return (
        <TouchableOpacity onPress={logout}>
            <Text>Logout</Text>
        </TouchableOpacity>
    )
}

export default Profile