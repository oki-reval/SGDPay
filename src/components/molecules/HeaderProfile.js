import React, { useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Animated, Image, Dimensions } from 'react-native';
import { color } from '_styles';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { convertToRp } from '_utils';


const HeaderProfile = (props) => {

    return (
        <View style={styles.wraper}>
            <LinearGradient colors={['#009BA0', '#65DA8D']} style={styles.bg} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} />
            <Text style={styles.title}>Akun Saya</Text>
            <View style={styles.textWraper}>
                <Image source={require('_assets/images/ccsgd.png')} style={styles.cc} resizeMode='contain' />
                <View>
                    <Text style={[styles.text, { fontSize: 10, fontWeight: 'normal' }]}>Nomor Rekening</Text>
                    <Text style={[styles.text, { fontSize: 18 }]}>{props.account}</Text>
                </View>
                <Text style={[styles.text, { fontSize: 16 }]}>{props.name}</Text>
                <View>
                    <Text style={[styles.text, { fontSize: 10, fontWeight: 'normal' }]}>Saldo</Text>
                    <Text style={[styles.text, {fontSize: 16}]}>{convertToRp(props.saldo)}</Text>
                </View>
            </View>
        </View>
    )
}

const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
    wraper: {
        // flex: 1,
    },
    bg: {
        height: 200,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        transform: [{ scaleX: 1.5 }],
        position: 'absolute',
        width: width
    },
    cc: {
        height: width - 180,
        alignSelf: 'center',
        position: 'absolute'
    },
    title: {
        marginTop: 50,
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center'
    },
    textWraper: {
        width: width,
        paddingHorizontal: 60,
        paddingVertical: 20,
        height: width - 180,
        justifyContent: 'space-between'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default withNavigation(HeaderProfile)