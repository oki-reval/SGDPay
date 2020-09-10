import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Image, TouchableOpacity, FlatList, Text } from 'react-native';
import { color,style } from '_styles';
import { connect } from 'react-redux';
import { HeaderTransparent, Input, HeaderCart, Button } from '_atoms';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Loading, AllProduct, TokenDenom, ProductUin } from '_molecules';

class Product extends React.Component {

    constructor(props) {
        super(props),
            this.state = {
                index: 0,
                loading: false,
                routes: [
                    { key: 'first', title: 'Transfer' },
                    { key: 'second', title: 'Riwayat' }
                ],
                product: " ",
                changeView: false,
            }
    }

    HandlePress = () => {
        this.props.navigation.goBack()
    }

    renderProductDetail = () => {
        this.props.navigation.navigate('UinProductDetail')
    }

    render() {
        const initialLayout = { width: Dimensions.get('window').width };
        const {product, paket} = this.setState ;
        return (
            <View style={{ flex: 1 }}>
                <HeaderTransparent style={{padding:0}} >
                    <Input placeholder='Cari...' icon='search' containerStyle={{ flex: 1 }} />
                    <TouchableOpacity>
                        <Icon name='cart-plus' color={this.state.yAxis < 70 ? '#fff' : color.g500} size={30} style={{ paddingHorizontal: 10 }} />
                    </TouchableOpacity>
                </HeaderTransparent>
                <View style={styles.ViewProduct}>
                    <ProductUin product={product}  horizontal={false} numberOfColum={2}  />
                </View>

            </View>
        );
    }
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    ViewProduct: {
        flex: 1,
        alignItems: 'center',
        paddingTop:10
    },
    ViewProductItem: {
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 8,
        borderRadius: 5

    }
})

const mapStateToProps = state => {
    return {
        user: state.user.data,
        wallet: state.user.wallet
    }
}

export default connect(mapStateToProps)(Product);