import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet, Alert } from 'react-native';
import { style, color } from '_styles';
import { convertToRp } from '_utils';
import Axios from 'axios';

const TokenDenom = (props) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        getDenom()
    },[])

    const renderNominal = ({ item }) => {
        const selected = props.paket.value== item.value;
        return (
            <TouchableOpacity style={[styles.denom, style.shadow, { backgroundColor: selected ? color.primary : '#fff' }]} onPress={() => props.onPress(item)}>
                <Text style={[styles.title, { color: selected ? '#fff' : color.g900 }]}>{item.value}</Text>
            </TouchableOpacity>
        )
    }

    const getDenom = () => {
        Axios.get('/denom?type=PLN')
        .then ( res =>{
            console.log(res)
            setData(res.data.data)
        }).catch( error =>{
            Alert.alert(
                'PERHATIAN !',
                error.response.data.message
            )
        }

        )
    }
    return (
        <View style={{ padding: 10 }}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderNominal}
                numColumns={2} />
        </View>
    )
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    denom: {
        width: (width - 40) / 2,
        margin: 5,
        borderRadius: 5,
        padding: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    imgWrapper: {
        borderColor: '#a9a9a9',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginVertical: 10
    }
})

export default TokenDenom;