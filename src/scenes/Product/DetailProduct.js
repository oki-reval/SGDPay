import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Image, Alert, ScrollView, Text } from 'react-native';
import { color } from '_styles';
import { connect } from 'react-redux';
import { ProductUin } from '_molecules';
import { HeaderTransparent, Input, ButtonGradient, Button, Divider, DividerSmall } from '_atoms';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputSpinner from "react-native-input-spinner";
import Axios from 'axios';
import { convertToRp } from '_utils';

class DetailProduct extends React.Component {

    constructor(props) {
        super(props),
            this.state = {
                index: 0,
                loading: false,
                routes: [
                    { key: 'first', title: 'Transfer' },
                    { key: 'second', title: 'Riwayat' }
                ],
                product_id:props.navigation.getParam('id'),
                name: props.navigation.getParam('name'),
                price: props.navigation.getParam('price'),
                image: props.navigation.getParam('image'),
                merchant: props.navigation.getParam('merchant'),
                stock: props.navigation.getParam('stock'),
                description: props.navigation.getParam('description'),
                value: ' ',
                product: '',
                quantity: '1'
            }
    }

    HandlePress = () => {
        this.props.navigation.goBack()
    }
    handleChange = async (type, val) => {
        const quantity = Object.assign({}, this.state)
        quantity[type] = val
        this.setState({ quantity })
      }

    goCart = () => {
        const {quantity,product_id} = this.state;
        console.log({quantity})
        Axios.post(`/cart`,{
            quantity, product_id
        }).then( res =>{
            console.log(res)
            Alert.alert('Produk Ditambahkan ke Keranjang')
        }).catch(error=>{
            console.log({error})
            Alert.alert('Produk Gagal ditambahkan ')
        })
    }

    render() {
        const initialLayout = { width: Dimensions.get('window').width };
        const { stock, price, name, quantity, loading, merchant, description, product,product_id } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar animated translucent backgroundColor={color.grey} ></StatusBar>
                <ScrollView >
                    <View style={styles.container}>
                        <View style={[styles.ViewProductItem, { margin: 0 }]}>
                            <Image source={require('assets/icons/sgd-botol.png')} style={styles.ImageProduct}></Image>
                        </View>
                        <Text> {product_id}</Text>
                        <Text style={styles.priceText}>{convertToRp(price)} </Text>
                        <Text style={styles.titleText}>{name} </Text>
                        <DividerSmall />
                        <View style={[styles.flexRow, { alignItems: 'center' }]}>
                            <Text style={styles.sellerText}>Djual oleh <Text style={styles.seller}>{merchant}</Text></Text>
                            <Text style={styles.sellerText}>Stock Produk <Text style={styles.seller}>{stock}</Text></Text>

                        </View>
                    </View>
                    <Divider />
                    <View style={{ padding: 10 }}>
                        <Text style={[styles.titleText, { fontWeight: '' }]}>Informasi Produk </Text>
                        <Text> {description} </Text>
                    </View>

                    <View style={styles.ViewProduct}>

                    </View>

                    <View style={styles.ViewProductItem}>
                        <Text style={[styles.titleText, { fontWeight: 'bold', alignSelf: 'flex-start', padding: 10 }]}>Produk Lainya </Text>
                        <ProductUin product={product} horizontal={true} numberOfColum={1}></ProductUin>
                    </View>

                </ScrollView>
                <View style={styles.Footer}>
                    <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'center' }}>
                        <InputSpinner
                            max={10}
                            min={1}
                            step={1}
                            colorMax={"#f04048"}
                            rounded={false}
                            showBorder
                            value={quantity}
                            height={35}
                            color={color.g500}
                            onChange={(num) => this.setState({quantity: num     }) }
                        />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'center' }}>
                        <Button title='+ Keranjang' loading={loading} disabled={loading} style={{ backgroundColor: color.secondary }} onPress={() => this.goCart()} />
                    </View>
                </View>
            </View>
        );
    }
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 0,
        backgroundColor: color.bglight
    },
    ViewProduct: {
        flex: 1,
        backgroundColor: color.g300,
        padding: 8,
    },
    ViewProductItem: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    ImageProduct: {
        width: width,
        height: height / 2 - 50

    },
    Footer: {
        height: 58,
        borderTopWidth: 1,
        borderColor: color.g300,
        flexDirection: 'row'
    },
    priceText: {
        color: color.g800,
        fontWeight: 'bold',
        fontSize: 18,
    },
    titleText: {
        fontSize: 16,
        color: color.g800,
        marginVertical: 10,

    },
    sellerText: {
        color: color.g700,
        fontSize: 12,
        marginVertical: 10
    },
    seller: {
        fontWeight: 'bold',
        fontSize: 14
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

const mapStateToProps = state => {
    return {
        user: state.user.data,
        wallet: state.user.wallet
    }
}

export default connect(mapStateToProps)(DetailProduct);