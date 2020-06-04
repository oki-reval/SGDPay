import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation'
import { color } from '_styles';
import Modal from 'react-native-modal';
import { FlatList } from 'react-native-gesture-handler';

export const Menu = (props) => {

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} style={styles.iconWrap} onPress={()=>props.onPress(item)}>
                <Image source={item.icon} style={[styles.icon, { tintColor: index == menus.length - 1 ? color.g700 : null, width: index == menus.length - 1 ? 30 : ((width-10)/5)- 25 }]} resizeMode='contain' />
            </TouchableOpacity>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={menus}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    numColumns={4} />
            </View>
        </>
    )
}

export const FullMenu = (props) => {

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} style={styles.fullMenuWrap}>
                <Image source={item.icon} style={styles.icon} resizeMode='contain' />
            </TouchableOpacity>
        )
    }

    return (
        <Modal isVisible={props.isVisible} swipeDirection='down' onBackdropPress={props.toggle} onSwipeComplete={props.toggle} style={{ margin: 0, marginTop: height/3 }}>
            <View style={styles.fullMenu}>
                <FlatList
                    data={fullmenu}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    numColumns={4} />
            </View>
        </Modal>
    )
}

export const Main = (props) => {

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => props.handleTouch(item)} key={index} style={styles.mainWrap}>
                <Image source={item.icon} style={styles.iconMain} resizeMode='contain' />
            </TouchableOpacity>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={main}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    horizontal />
            </View>
        </>
    )
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    iconWrap: {
        width: (width-10)/4,
        alignItems: 'center',
        // padding: 5,
    },
    mainWrap: {
        width: (width-30)/3,
        alignItems: 'center',
    },
    fullMenuWrap: {
        width: (width-40)/4,
        alignItems: 'center',
    },
    icon: {
        width: (width-10)/5,
        height: (width-10)/5,
    },
    iconMain: {
        width: ((width-10)/5) - 30,
        height: ((width-10)/5) - 30,
    },
    subTitle: {
        fontSize: 10,
        color: color.g700
    },
    containerTitle: {
        paddingLeft: ((width-10)/4) / 4,
        paddingBottom: 5
    },
    title: {
        fontWeight: 'bold',
        color: color.g700
    },
    fullMenu:{
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})

const main = [
    {
        icon: require('_assets/icons/topup.png'),
        route: 'TopUp',
        params: ''
    },
    {
        icon: require('_assets/icons/transfer.png'),
        route: 'Transfer',
        params: '',
    },
    {
        icon: require('_assets/icons/penarikan.png'),
        route: 'Penarikan',
        params: ''
    },
    // {
    //     icon: require('_assets/icons/qrcode.png'),
    //     route: '',
    //     params: '',
    // }
]

const menus = [

    {
        icon: require('_assets/icons/listrik.png'),
        route: 'Listrik',
        params: ''
    },
    {
        icon: require('_assets/icons/pulsa.png'),
        route: 'PulsaScreen',
        params: ''
    },
    {
        icon: require('_assets/icons/pascabayar.png'),
        route: 'PascaBayar',
        params: 'Coming Soon'
    },
    {
        icon: require('_assets/icons/paketdata.png'),
        route: 'PaketData',
        params: 'Coming Soon'
    },
    {
        icon: require('_assets/icons/olshop.png'),
        route: 'Penarikan',
        params: 'Coming Soon'
    },
    {
        icon: require('_assets/icons/ewallet.png'),
        route: 'Penarikan',
        params: 'Coming Soon'
    },
    {
        icon: require('_assets/icons/multifinance.png'),
        route: 'Penarikan',
        params: 'Coming Soon'
    },
    {
        icon: require('_assets/icons/more.png'),
        route: 'toggle',
        params: ''
    },
]

const fullmenu = [

    {
        icon: require('_assets/icons/listrik.png'),
        route: 'alert',
        params: 'Coming Soon'
    },
    {
        icon: require('_assets/icons/pulsa.png'),
        route: 'PulsaScreen',
        params: ''
    },
    {
        icon: require('_assets/icons/pascabayar.png'),
        route: 'alert',
        params: 'Coming Soon'
    },
    {
        icon: require('_assets/icons/paketdata.png'),
        route: 'alert',
        params: 'Coming Soon'
    },
    {
        icon: require('_assets/icons/olshop.png'),
        route: 'alert',
        params: 'Coming Soon'
    },
    {
        icon: require('_assets/icons/ewallet.png'),
        route: 'alert',
        params: 'Coming Soon'
    },
    {
        icon: require('_assets/icons/multifinance.png'),
        route: 'alert',
        params: 'Coming Soon'
    },
]