import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import { color } from '_styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'


const Button = (props) => {
    const { outline, disabled, textColor, bordered } = props
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={props.containerStyle}>
            <View style={[styles.wraper, { backgroundColor: disabled ? color.g400 : props.color ?? outline ? 'transparent' : color.primary, borderWidth: outline ? 2 : bordered ? 2 : 0, borderColor: props.color ?? color.primary }, props.style]}>
                {
                    props.loading ?
                        <BallIndicator size={18} color='#fff' /> :
                        <Text style={[styles.text, { color: textColor ?? props.color ?? outline ? props.color ?? color.primary : '#fff' }]}>{props.title}</Text>
                }
            </View>
        </TouchableOpacity>
    )
}

const ButtonText = (props) => {
    const { outline, disabled, textColor, textSize } = props
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} >
            {props.loading ?
                <BallIndicator size={18} color={textColor ?? color.primary} /> :
                <Text style={[styles.btnText, props.style, { color: textColor ?? color.primary, fontSize: textSize }]}>{props.title}</Text>
            }
        </TouchableOpacity>
    )
}

const ButtonClean = (props) => {
    const { outline, disabled, textColor } = props
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={[styles.btnClean, props.style]} >
            {props.icon && <Icon name={props.icon} size={18} color={color.g700} />}
            <Text style={[styles.btnText, { color: textColor ?? color.g600, fontWeight: 'normal' }]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const ButtonIndicator = (props) => {
    const { outline, disabled, border , textColor, stripColor } = props
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} >
            <LinearGradient 
                start={{x: 0.4, y: 0.25}} end={{x: 0.5, y: 1.0}}
                locations={[0,0.8,0.6]}
                colors={props.colors} 
                style={[styles.btnIndicator, props.style,{ borderWidth: border}]}>
                {props.icon && <Icon name={props.icon} size={18} color={color.g700} />}
                <View>
                    <Text style={[styles.btnTextIndicator, { color: textColor ?? color.g600}]}>{props.title}</Text>
                    {
                        props.strip && <View style={{borderBottomWidth:3,borderBottomColor:stripColor,width:25}} />
                    }
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wraper: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 5,
        borderColor: color.primary
    },
    text: {
        fontWeight: 'bold',
    },
    btnText: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    btnClean: {
        borderWidth: 1,
        flexDirection: 'row',
        padding: 5,
        borderRadius: 10,
        borderColor: color.g300,
        margin: 3
    },
    btnIndicator:{
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        borderColor: color.g300,
        margin: 3
    },
    btnTextIndicator:{
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export {
    Button,
    ButtonText,
    ButtonClean,
    ButtonIndicator
}