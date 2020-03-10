import React from 'react';
<<<<<<< HEAD
import { Text, TouchableOpacity, View } from 'react-native';
=======
import { Text, TouchableOpacity, View, StyleSheet,Dimensions } from 'react-native';
>>>>>>> cac643354922bf285dd5b3d014dadf39f55f4b13
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
<<<<<<< HEAD
        <View>
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Pin')}>
                <Text>Pin</Text>
=======
        <View style={styles.wraper,{height: height}} resizeMode='cover'>
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toVerif}>
                <Text>Verifikasi</Text>
>>>>>>> cac643354922bf285dd5b3d014dadf39f55f4b13
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