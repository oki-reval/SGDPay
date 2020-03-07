import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import { color } from '_styles';
import LinearGradient from 'react-native-linear-gradient';


const ButtonGradient = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} >
            <LinearGradient colors={['#009BA0','#65DA8D' ]} style={[styles.wraper, props.style,{backgroundColor:props.disabled?
             color.g400 : props.color?? color.primary}]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 6 }} >
                
                {
                    props.loading ?
                        <BallIndicator size={18} color='#fff' /> :
                        <Text style={[styles.text, {color: props.textColor?? '#fff'}]}>{props.title}</Text>
                }

            </LinearGradient>
            {/* <View style={[styles.wraper, props.style, {backgroundColor: props.disabled? color.g400 : props.color?? color.primary}]}>
                {
                    props.loading ?
                        <BallIndicator size={18} color='#fff' /> :
                        <Text style={[styles.text, {color: props.textColor?? '#fff'}]}>{props.title}</Text>
                }
            </View> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wraper: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
        flexDirection: 'row',
        marginVertical: 5
    },
    text: {
        fontWeight: 'bold',
    }
})

export default ButtonGradient