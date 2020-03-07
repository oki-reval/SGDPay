import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet,Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = (props) => {

    const logout = () => {
        AsyncStorage.clear()
        props.navigation.navigate('AuthLogin')
    }

    const toVerif = () =>{
        props.navigation.navigate('verifikasi')
    }

    return (
        <View style={styles.wraper,{height: height}} resizeMode='cover'>
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toVerif}>
                <Text>Verifikasi</Text>
            </TouchableOpacity>
        </View>
    )
    
}
const { height } = Dimensions.get('screen')    

const styles =StyleSheet.create({
    wraper:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
})

export default Profile