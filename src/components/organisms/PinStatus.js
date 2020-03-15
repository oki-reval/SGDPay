import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from '_atoms';
import { color } from '_styles';

const PinStatus = (props) => {
    return (
        <View style={styles.wrap}>
            <Image source={props.failed? require('_assets/images/pic_failed.png') : require('_assets/images/ic_pin.png')} style={styles.img} resizeMode='contain' />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subTitle}>{props.subtitle}</Text>
            <Button title={props.buttonTittle??'Ke Menu Utama'} onPress={props.onPress} />
        </View>
    )
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    img: {
        width: width - 100,
        height: width - 100,
        alignSelf: 'center'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: color.g900
    },
    subTitle:{
        fontSize: 16,
        textAlign: 'center',
        color: color.g900,
        marginBottom: 50
    },
})
export default PinStatus