import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { color, style } from '_styles';

export const Divider = () => {
    const widthScreen = Dimensions.get('screen').width
    return (
        <View style={{ height: 5, width: widthScreen, backgroundColor: color.g200 }} />
    )
}

export const Card = (props) => {
    return (
        <View style={[style.shadow, styles.card, props.style]}>
            {props.children}
        </View>
    )
}

export const DividerSmall = () =>{
    const widthScreen = Dimensions.get('screen').width
    return (
        <View style={{ height: 2, width: widthScreen, backgroundColor: color.g200 }} />
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10
    }
})