import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color, style } from '_styles'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import { Main } from './Menu';

const CardInfo = () => {
    return (
        <View style={[styles.card, style.shadow]}>
            <Main />
            {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name='ios-wallet' size={24} color={color.primary} style={{ marginRight: 10 }} />
                <View>
                    <Text style={[styles.text, { fontSize: 10 }]}>Saldo</Text>
                    <Text style={[styles.text]}>Rp. 120.000</Text>
                </View>
            </View>
            <View>
                <Icons name='qrcode' size={24} color={color.g900} />
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // height: 30,
        backgroundColor: '#fff',
        margin: 10,
        // padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: color.g700,
        fontWeight: 'bold'
    }
})

export default CardInfo;