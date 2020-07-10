import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Image, TouchableOpacity, FlatList, Text } from 'react-native';
import { color } from '_styles';
import { connect } from 'react-redux';
import { HeaderTransparent, Input, ButtonGradient, Button } from '_atoms';
import Icon from 'react-native-vector-icons/FontAwesome';

class UinProduct extends React.Component {

    constructor(props) {
        super(props),
            this.state = {
                index: 0,
                loading: false,
                routes: [
                    { key: 'first', title: 'Transfer' },
                    { key: 'second', title: 'Riwayat' }
                ],
                product: [
                    {
                        name: 'SGD Water Gelas',
                        price: ' Rp 6000',
                    },
                    {
                        name: 'SGD Water Botol ',
                        price: 'Rp 11000',
                    },
                    {
                        name: 'sgd water sedang',
                        price: 'Rp 16000',
                    },
                ],
                changeView: false,
            }
    }

    HandlePress = () => {
        this.props.navigation.goBack()
    }

    renderButton = () => {
        this.props.navigation.navigate('UinProductDetail')
    }

    renderProduct = ({ item }) => {
        return (
            <View style={styles.ViewProductItem}>
                <Image source={require("_assets/icons/sgd-botol.png")} style={{ width: 120, height: 119 }}></Image>
                <Text style={{ fontSize: 16 }}>{item.name}</Text>
                <Text>{item.price}</Text>
                <Button title='BELI' style={{ width: 120 }} onPress={this.renderButton}></Button>
            </View>
        )
    }


    render() {
        const initialLayout = { width: Dimensions.get('window').width };
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} backgroundColor={color.primary} barStyle='light-content' />
                <HeaderTransparent >
                    <TouchableOpacity onPress={this.HandlePress}>
                        <Icon name='arrow-left' color={this.state.yAxis < 70 ? '#fff' : color.g500} size={25} style={{ paddingRight: 10 }} />
                    </TouchableOpacity>
                    <Input placeholder='Cari...' icon='search' containerStyle={{ flex: 1 }} />
                    <TouchableOpacity>
                        <Icon name='cart-plus' color={this.state.yAxis < 70 ? '#fff' : color.g500} size={30} style={{ paddingHorizontal: 10 }} />
                    </TouchableOpacity>
                </HeaderTransparent>

                <View style={styles.ViewProduct}>
                    <FlatList
                        data={this.state.product}
                        keyExtractor={item => item.id}
                        renderItem={this.renderProduct}
                        numColumns={2}
                    />

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewProduct: {
        flex: 1,
        backgroundColor: color.g300,
        padding: 8,
        alignItems: 'center'
    },
    ViewProductItem: {
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        margin: 8,
        borderRadius: 5

    }
})

// const product = [
//     {
//         name: 'sgd water kecil',
//         price: '6000',
//     },
//     {
//         name: 'sgd water besar',
//         price: '11000',
//     },
//     {
//         name: 'sgd water sedang',
//         price: '16000',
//     },
// ]
const mapStateToProps = state => {
    return {
        user: state.user.data,
        wallet: state.user.wallet
    }
}

export default connect(mapStateToProps)(UinProduct);