import React from 'react';
import { TextInput, StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { color } from '_styles';


const Input = (props) => {
    return (
        <>
            {
                props.label&&<Text style={styles.label}>{props.label}</Text>
            }
            <View style={[styles.wraper, props.containerStyle]}>
                <TextInput onChangeText={props.onChangeText} placeholder={props.placeholder} style={styles.input} secureTextEntry={props.password} {...props} />
                {
                    props.logo? <Image source={props.logo} style={{height: 30, width: 40, marginRight: 10}} resizeMode='contain' /> : null
                }
                {
                    props.icon&&<Icon name={props.icon} color={color.g400} size={20} style={styles.icon} />
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wraper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: color.g300,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor: color.g100
    },
    input: {
        flex: 1,
        borderRadius: 10,
        height: 40,
        color: color.g700,
        paddingHorizontal: 10
    },
    icon: {
        padding: 10
    },
    label:{
        fontSize: 16,
        fontWeight: 'bold',
        color: color.g800,
        marginTop: 5
    }
})

export default Input