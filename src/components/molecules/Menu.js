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
                        <TouchableOpacity key={index} style={styles.iconWrap} onPress={() => this.props.navigation.navigate(data.navigate, { params: data })}>
                            <Image source={data.icon} style={styles.icon} />
                            <Text style={styles.subTitle}>{data.title}</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        flexWrap: 'wrap'
    },
    iconWrap: {
        width: iconWrap,
        alignItems: 'center',
        padding: 5,
    },
    icon: {
        width: widthIcon - 25,
        height: widthIcon - 25,
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

const menus = [
    {
        icon: require('_assets/icons/tryout.png'),
        title: 'Pulsa',
        navigate: 'Clue',
        params: ''
    },
    {
        icon: require('_assets/icons/study.png'),
        title: 'Listrik'
    },
    {
        icon: require('_assets/icons/brain.png'),
        title: 'Telkom'
    },
    {
        icon: require('_assets/icons/book.png'),
        title: 'PDAM'
    },
    {
        icon: require('_assets/icons/univ.png'),
        title: 'Token Listrik'
    },
    {
        icon: require('_assets/icons/beasiswa.png'),
        title: 'Listrik'
    },
    {
        icon: require('_assets/icons/beasiswa.png'),
        title: 'E-Wallet'
    },
    {
        icon: require('_assets/icons/switch.png'),
        title: 'UKT'
    },
]