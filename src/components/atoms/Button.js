import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import { color } from '_styles';


const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} >
            <View style={[styles.wraper, props.style, {backgroundColor: props.disabled? color.g400 : props.color?? color.primary}]}>
                {
                    props.loading ?
                        <BallIndicator size={18} color='#fff' /> :
                        <Text style={[styles.text, {color: props.textColor?? '#fff'}]}>{props.title}</Text>
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wraper: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 5
    },
    text: {
        fontWeight: 'bold',
    }
})

export default Button