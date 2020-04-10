import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { style, color } from '_styles';
import { convertToRp } from '_utils';
const PulsaDenom =(props)=> {

    const renderNominal = ({ item }) => {
        const selected = props.produk.name == item.name
        return (
            <TouchableOpacity style={[styles.denom, style.shadow, {backgroundColor: selected? color.primary : '#fff'}]} onPress={() => props.onPress(item)}>
                <Text style={[styles.title, {color: selected? '#fff' : color.g900}]}>{item.name}</Text>
                <Text style={{ color: selected? '#fff' : color.g700 }}>{convertToRp(item.nominal)}</Text>
            </TouchableOpacity>
        )
    }
        return (
            <View style={{padding: 10}}>
                <FlatList
                    data={props.data}
                    keyExtractor={item => item.id}
                    renderItem={renderNominal}
                    numColumns={2} />
            </View>
        )
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    denom: {
        width: (width-40)/2,
        margin: 5,
        borderRadius: 5,
        padding: 10
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    imgWrapper:{
        borderColor: '#a9a9a9',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginVertical: 10
    }
})

export default PulsaDenom;