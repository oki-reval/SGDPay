import React, { useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import { color } from '_styles';
import { Header } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


const Headers = (props) => {
    const handleBackButton=()=>{
        if(props.onBackPress){
            props.onBackPress()
            return
        }
        props.navigation.goBack()
    }

    return (
        <View style={styles.wraper}>
            {
                props.disableBack ? null :
                    <TouchableOpacity style={[styles.container, { paddingLeft: 15, paddingRight: 0 }]} onPress={handleBackButton}>
                        <Icon name='chevron-left' size={20} color='#fff' />
                    </TouchableOpacity>
            }
            <View style={[styles.titleWraper, {width: '80%'} ]}>
                <Text style={styles.name}>{props.title}</Text>
                {
                    props.subTitle ?
                        <Text style={styles.subTitle}>{props.subTitle}</Text> : null
                }
            </View>
            {
                props.rightIcon ?
                    <TouchableOpacity style={[styles.container, { paddingRight: 15 }]} onPress={props.onPress} >
                        <Icon name={props.rightIcon} color='#fff' size={20} />
                    </TouchableOpacity> : null
            }
        </View>
    )
}

export const HeaderTransparent = (props) => {    
    return (
        <Animated.View style={[styles.wraperTransparent, {backgroundColor: props.animated, elevation: props.elevation}]}>
            {props.children}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    wraper: {
        height: Header.HEIGHT+20,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
        backgroundColor: color.primary ,
    },
    wraperTransparent: {
        height: Header.HEIGHT+15,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        paddingTop: 25,
        paddingHorizontal: 10,
        paddingBottom: 5,
        alignItems: 'center'
    },
    container: {
        padding: 10,
        justifyContent: 'center',
        marginTop:20
    },
    titleWraper: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop:15,
        color: '#fff'
    },
    subTitle: {
        fontSize: 12,
        color: color.g500,
        marginLeft: 10
    },
    date: {
        color: color.g500
    }
})

export default withNavigation(Headers)