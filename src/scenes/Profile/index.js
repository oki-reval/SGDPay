import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = (props) => {

    const logout = () => {
        AsyncStorage.clear()
        props.navigation.navigate('AuthLogin')
    }

    return (
        <View>
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Pin')}>
                <Text>Pin</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile