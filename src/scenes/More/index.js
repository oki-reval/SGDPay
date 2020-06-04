import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { ButtonGradient, Input } from '_atoms';
import AsyncStorage from '@react-native-community/async-storage';

class More extends React.Component {

    logout = () => {
        AsyncStorage.clear()
        this.props.navigation.navigate('AuthLogin')
    }

    render() {
        return (
            <View>
                
            </View>
        )
    }
}

export default More;