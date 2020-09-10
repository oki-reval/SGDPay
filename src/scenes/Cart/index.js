import React, { sestate } from 'react';
import { View, Text, StatusBar, StyleSheet, FlatList, Dimensions, Image, Alert } from 'react-native';
import { color } from '_styles';
import axios from 'axios';
import { convertToRp } from '_utils';
import { Icons, Button, HeaderForCart } from '_atoms';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputSpinner from "react-native-input-spinner";


class Cart extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                data: [],
            }
    }
    componentDidMount() {
        this.getCart()
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.getCart()
        })
    }

    componentWillUnmount() {
        this.focusListener.remove()
    }

    getCart = () => {
        axios.get(`/cart`)
            .then(res => {
                const data = res.data.data
                this.setState({ data })
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }

    updateCart = (item, num) => {
        axios.put(`/cart/${item.item.id}`, {
            quantity: item.num
        }).then(res => {
            this.getCart()
        }).catch(err => {
            alert('ga oke')
        })
    }

    deleteFromCart = (id) => {
        Alert.alert(
            'Hapus Produk dari keranjang',
            ' ', [
            {
                text: 'tidak', onPress: () => { }
            },
            {
                text: 'Hapus', onPress: () => {
                    axios.delete(`/cart/${id}`)
                        .then(res => {
                            this.getCart()
                        })
                }
            }
        ])

    }

    renderEmptyList = () => {
        return (
            <View style={styles.emptyView}>
                <Image source={require('_assets/images/sorry.png')} style={styles.logo} resizeMode='contain' />
                <Text style={{ fontWeight: 'bold', color: color.g700 }}>Keranjang Anda Kosong</Text>
            </View>
        )
    }

    renderCart = ({ item, index }) => {
        return (
            <View>
                <View style={styles.cartContainer}>
                    <Text style={styles.productName}> Produk {item.product.merchant_name}</Text>
                    <View style={styles.productView}>
                        <Image source={require('_assets/icons/sgdWaterGelas.jpeg')} style={styles.productImage} resizeMode='contain' />
                        <View>
                            <Text style={styles.productName}>{item.product.name}</Text>
                            <Text style={styles.priceText}>{convertToRp(item.product.price)}</Text>

                            <Text style={styles.productStock}>{item.quantity} PCS</Text>
                        </View>
                    </View>
                    <View style={styles.icon}>
                        <Icons src={require('_assets/icons/ic_trash.png')} color={color.g400} size={30} onPress={() => this.deleteFromCart(item.id)} />
                        <InputSpinner
                            max={10}
                            min={1}
                            step={1}
                            colorMax={"#f04048"}
                            rounded={false}
                            showBorder
                            value={item.quantity}
                            buttonStyle={styles.buttonStyles}
                            inputStyle={styles.inputStyles}
                            style={styles.input}
                            color={color.g500}
                            onChange={(num) => this.updateCart({ item, num })}
                        />
                        <Button title='Beli' style={{ marginRight: 10, padding: 10, height: 30, backgroundColor: color.secondary }} />
                    </View>
                </View>
                <View style={{ height: 6, flex: 1, backgroundColor: color.g200 }}></View>
            </View>
        )
    }

    render() {
        const { data } = this.state;
        return (
            <View>
                {/* <StatusBar translucent={false} backgroundColor={color.primary} barStyle='light-content' /> */}
                <HeaderForCart />
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item.toString()}
                    renderItem={this.renderCart}
                    ListEmptyComponent={this.renderEmptyList}
                />
            </View>
        )
    }
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    logo: {
        width: width - 100,
        height: height / 2,
        alignSelf: 'center',
    },
    emptyView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartContainer: {
        padding: 10,
        flex: 1
    },
    productView: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
    },
    productImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 10
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.g900,
        marginBottom: 5
    },
    priceText: {
        color: color.failed,
        fontWeight: 'bold'
    },
    productStock: {
        fontSize: 12,
        color: color.g900
    },
    icon: {
        alignSelf: 'flex-end',
        // position: 'absolute',
        // marginTop: 90,
        flexDirection: 'row'

    },
    updateText: {
        alignSelf: 'center',
        color: color.secondary,
        fontWeight: 'bold'
    },
    input: {
        height: 25,
        width: 80,
        alignSelf: 'center',
        marginRight: 10
    },
    inputStyles: {
        padding: 0,
        alignSelf: 'center'
    },
    buttonStyles: {
        height: 25,
        width: 25
    }
})

export default Cart;