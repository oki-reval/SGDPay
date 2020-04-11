import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Header } from 'react-navigation-stack';
import { color } from '_styles';

const EmptyList = (props) => (
    <View style={[styles.scene, { backgroundColor: 'white', padding: 10, justifyContent: 'center', }]}>
        <Image source={require('_assets/images/sorry.png')} style={styles.img}></Image>
        <Text style={styles.Text_welcome}>{props.title}</Text>
        <Text style={styles.TextRiw}>{props.description}</Text>
    </View>
);

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    scene: {
        height: height-Header.HEIGHT-StatusBar.currentHeight-49
    },
    img: {
        width: 250,
        height: 183,
        marginBottom: 50,
        alignSelf: 'center'
    },
    TextRiw: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 16,
        color: color.g700,
    },
    Text_welcome: {
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
        color: color.g700,
    },
});

export default EmptyList;