import React from 'react';
import { TouchableHighlight, Text, StyleSheet, Image } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import { color, style } from '_styles';


const Icons = (props) => {

    return (
        <TouchableHighlight style={[styles.wraper, props.style]} underlayColor='transparent' onPress={props.onPress} onLongPress={props.onLongPress} disabled={props.disabled} >
            <Image source={props.src} style={{ height: props.size, width: props.size, tintColor: props.color }} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    wraper: {
        padding: 5
    }
})

export default Icons