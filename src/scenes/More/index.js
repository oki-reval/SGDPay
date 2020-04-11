import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { ButtonGradient, Input } from '_atoms';

class More extends React.Component {

    logout = () => {
        AsyncStorage.clear()
        props.navigation.navigate('AuthLogin')
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.logout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Pin')}>
                    <Text>Pin</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Verifikasi')}>
                    <Text>Verifikasi</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default More;