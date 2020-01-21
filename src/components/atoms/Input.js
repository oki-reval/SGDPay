import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { color } from '_styles';


const Input = (props) => {
    return (
        <View style={styles.wraper}>
            <TextInput onChangeText={props.onChangeText} placeholder={props.placeholder} style={styles.input} secureTextEntry={props.password} {...props} />
            {
                props.icon? <Icon name={props.icon} color={color.g400} size={20} style={styles.icon} /> : null
            }
        </View>
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
        backgroundColor: '#fff'
    },
    input: {
        flex: 1,
        borderRadius: 10,
        height: 40,
        color: color.g700,
        paddingHorizontal: 10
    },
    icon:{
        padding: 10
    }
})

export default Input