import React from 'react';
import { View, Dimensions } from 'react-native';
import { color } from '_styles';

export const Divider = () => {
    const widthScreen = Dimensions.get('screen').width
    return (
        <View style={{ height: 5, width: widthScreen, backgroundColor: color.g300 }} />
    )
}