import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation'
import { color } from '_styles';

const Menu = (props) => {

    return (
        <>
            <View style={styles.container}>
                {
                    menus.map((data, index) =>
                        <TouchableOpacity key={index} style={styles.iconWrap}>
                            <Image source={data.icon} style={[styles.icon, { tintColor: index==menus.length-1? color.g700 : null, width: index==menus.length-1? 30 : widthIcon-25}]} resizeMode='contain' />
                            {/* <Text style={styles.subTitle}>{data.title}</Text> */}
                        </TouchableOpacity>
                    )
                }
            </View>
        </>
    )
}
export const Main = (props) => {

    return (
        <>
            <View style={styles.container}>
                {
                    main.map((data, index) =>
                        <TouchableOpacity key={index} style={styles.mainWrap}>
                            <Image source={data.icon} style={styles.iconMain} resizeMode='contain' />
                        </TouchableOpacity>
                    )
                }
            </View>
        </>
    )
}

export default withNavigation(Menu)

const widthIcon = (Dimensions.get('screen').width - 10) / 5
const iconWrap = (Dimensions.get('screen').width - 10) / 4
const mainWrap = (Dimensions.get('screen').width-50) / 4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    iconWrap: {
        width: iconWrap,
        alignItems: 'center',
        // padding: 5,
    },
    mainWrap: {
        width: mainWrap,
        alignItems: 'center',
    },
    icon: {
        width: widthIcon,
        height: widthIcon,
    },
    iconMain: {
        width: widthIcon-30,
        height: widthIcon-30,
    },
    subTitle: {
        fontSize: 10,
        color: color.g700
    },
    containerTitle: {
        paddingLeft: iconWrap / 4,
        paddingBottom: 5
    },
    title: {
        fontWeight: 'bold',
        color: color.g700
    }
})

const main = [
    {
        icon: require('_assets/icons/topup.png'),
        navigate: '',
        params: ''
    },
    {
        icon: require('_assets/icons/transfer.png'),
        navigate: '',
        params: '',
    },
    {
        icon: require('_assets/icons/penarikan.png'),
        navigate: '',
        params: '',
    },
    {
        icon: require('_assets/icons/qrcode.png'),
        navigate: '',
        params: '',
    }
]

const menus = [
    
    {
        icon: require('_assets/icons/listrik.png'),
        navigate: '',
        params: ''
    },
    {
        icon: require('_assets/icons/pulsa.png'),
        navigate: '',
        params: ''
    },
    {
        icon: require('_assets/icons/pascabayar.png'),
        navigate: '',
        params: ''
    },
    {
        icon: require('_assets/icons/paketdata.png'),
        navigate: '',
        params: ''
    },
    {
        icon: require('_assets/icons/olshop.png'),
        navigate: '',
        params: ''
    },
    {
        icon: require('_assets/icons/ewallet.png'),
        navigate: '',
        params: ''
    },
    {
        icon: require('_assets/icons/multifinance.png'),
        navigate: '',
        params: ''
    },
    {
        icon: require('_assets/icons/more.png'),
        navigate: '',
        params: ''
    },
]