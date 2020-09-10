import React, { useEffect } from 'react';
import { Text, StyleSheet, View, Platform, Animated, Image } from 'react-native';
import { color } from '_styles';
import { withNavigation } from 'react-navigation';


const Header = (props) => {

    const animated = props.animated.interpolate({
        inputRange: [0, 30, 100],
        outputRange: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)', 'rgba(255,255,255,1)'],
        extrapolateRight: 'clamp',
    })
    const elevation = props.animated.interpolate({
        inputRange: [0, 30, 100],
        outputRange: [0.01, 0.01, 3],
        extrapolateRight: 'clamp',
    })

    return (
        <Animated.View style={[styles.wraperTransparent, { backgroundColor: animated, elevation: elevation }]}>
            {props.children}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    wraper: {
        height: 58,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
        backgroundColor: '#fff',
    },
    wraperTransparent: {
        zIndex: 2,
        height: Platform.OS == 'ios' ?  73 : 68,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        paddingTop: Platform.OS == 'ios' ?  25 : 25,
        paddingHorizontal: 10,
        paddingBottom: 5,
        alignItems: 'center',
    },
    container: {
        padding: 10,
        justifyContent: 'center'
    },
    titleWraper: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    subTitle: {
        fontSize: 12,
        color: color.g500,
        marginLeft: 10
    },
    date: {
        color: color.g500
    },
    logo: {
        height: 40,
        width: 150
    }
})

export default withNavigation(Header)