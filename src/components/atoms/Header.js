import React, { useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import { color } from '_styles';
import { Input, Icons } from '_atoms';
import { Header } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


const Headers = (props) => {
    const handleBackButton = () => {
        if (props.onBackPress) {
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
            <View style={[styles.titleWraper, { width: '80%' }]}>
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
        <Animated.View style={[styles.wraperTransparent, { backgroundColor: props.animated, elevation: props.elevation }]}>
            {props.children}
        </Animated.View>
    )
}

export const HeaderUinProduct = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={{
                    uri:
                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
                }}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    marginLeft: 15,
                }}
            />
        </View>
    )
}

export const HeaderFull = (props) => {
    return (
        <Animated.View style={[styles.wrapers]}>
            {/* <Icon name='chevron-back-outline' size={34} color={color.g800} onPress={() => props.navigation.goBack()} /> */}
            <Icon name='arrow-left' color={color.g500} size={25} style={{ paddingRight: 10 }} onPress={() => props.navigation.goBack()} />
            <Input placeholder='Cari...' icon='search' containerStyle={{ flex: 1 }} />
            <Icons style={{ marginBottom: -15 }} src={require('_assets/icons/ic_tabbar_cart.png')} color={color.g800} size={28} onPress={() => props.navigation.navigate('Cart')} />
        </Animated.View>
    )
}

export const HeaderForCart = (props) => {
    return (
        <Animated.View style={[styles.wrapers,{backgroundColor:color.primary,height:70}]}>
            <Text style={{fontSize:20,fontWeight:'bold',padding:20,color:color.g100}}>Keranjang</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    wraper: {
        height: Header.HEIGHT + 20,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
        backgroundColor: color.primary,
    },
    wrapers: {
        height: Platform.OS == 'ios' ? 73 : 78,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Platform.OS == 'ios' ? 25 : 25,
        paddingHorizontal: 10,
        paddingBottom: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
        backgroundColor: '#fff',
        // alignItems:'center'
    },
    wraperTransparent: {
        height: Header.HEIGHT + 10,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    container: {
        padding: 10,
        justifyContent: 'center',
        marginTop: 20
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
        marginTop: 15,
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