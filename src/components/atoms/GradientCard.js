import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const GradientCard = (props) => {
    return (
        
            <LinearGradient colors={['#009BA0','#65DA8D' ]} style={[styles.wraper ]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 6 }} >
                <View>

                </View>
            </LinearGradient>
    )
}

const styles = StyleSheet.create({
    wraper: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 5
    },
    text: {
        fontWeight: 'bold',
    }
})

export default GradientCard