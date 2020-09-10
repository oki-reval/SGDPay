import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet, Alert, ImageBackground } from 'react-native';
import { style, color } from '_styles';
import { convertToRp } from '_utils';
import { withNavigation } from 'react-navigation';
import Axios from 'axios';

const ProductUin = (props) => {
    const [data, setData] = useState([])
    const [images] = useState(require('_assets/icons/sgd-botol.png'))
    const [logoProduct, setLogoProduct] = useState(data.merchant_logo)
    const [horizontal, setHorizontal] = useState(false)

    useEffect(() => {
        getDenom()
    }, [])

    const renderNominal = ({ item }) => {
        const selected = item.value;
        return (
            <TouchableOpacity style={[styles.denom, style.shadow, { backgroundColor: selected ? color.primary : '#fff' }]} onPress={() => props.navigation.navigate('DetailProduct', item)}>
                <Image source={images} style={styles.logoProduct}></Image>
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={[styles.title, { color: selected ? '#fff' : color.g900 }]}>{item.name}</Text>
                        <Text style={styles.textPrice}>{convertToRp(item.price)}</Text>
                    </View>
                    <View style={styles.viewMerchant}>
                        <Text style={[styles.textStock]}>Stock: {item.stock}</Text>
                        <View >
                        <Image source={images} style={styles.logoMerchant}></Image>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const getDenom = () => {
        Axios.get('/product/product/all')
            .then(res => {
                console.log(res)
                setData(res.data.data)
            }).catch(error => {
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
                horizontal={props.horizontal}
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderNominal}
                numColumns={props.numberOfColum}
            />
        </View>
    )
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    denom: {
        width: (width - 40) / 2,
        height: (height - 80) / 3,
        margin: 5,
        borderRadius: 5,

        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        alignContent: 'center',
        marginVertical:5
    },
    imgWrapper: {
        borderColor: '#a9a9a9',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginVertical: 10
    },
    logoProduct: {
        width: (width - 40) / 2,
        height: (height - 100) / 5,
    },
    textPrice: {
        color: color.gr600,
        fontSize: 16
    },
    textStock: {
        fontSize: 14,
        color: color.failed
    },
    textMerchant: {
        fontSize: 14,
        marginHorizontal: 3
    },
    logoMerchant: {
        width: (width - 140) / 12,
        height: (height - 160) / 25,
        marginHorizontal: 3
    },
    viewMerchant: {
        flexDirection: 'row',
        backgroundColor: color.g100,
        justifyContent: 'space-between',
        width: (width - 40) / 2,
        padding:2
    }

})

export default withNavigation(ProductUin);