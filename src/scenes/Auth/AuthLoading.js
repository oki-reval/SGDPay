import React, { useEffect} from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { color } from '_styles';
import { BarIndicator } from 'react-native-indicators';


const AuthLoading = (props) => {

    useEffect(()=>{
        AsyncStorage.getItem('auth')
            .then(val=>{
                console.log(val)
                if(val=='true'){
                    props.navigation.navigate('App')
                }else{
                    props.navigation.navigate('Auth')
                }
            })
    })

    return(
        <View style={styles.wrap}>
            <BarIndicator  color={'#fff'} count={5} size={30} style={{flex: 0}}/>
            {/* <Image source={require('../assets/cm.png')} style={styles.logo} resizeMode='contain' /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    wrap:{
        backgroundColor: color.primary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // logo:{
    //     height: Dimensions.get('window').height/10
    // }
})

export default AuthLoading;