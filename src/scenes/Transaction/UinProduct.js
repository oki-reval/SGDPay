import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Image, TouchableOpacity, FlatList, Text } from 'react-native';
import { color,style } from '_styles';
import { connect } from 'react-redux';
import { HeaderTransparent, Input, ButtonGradient, Button } from '_atoms';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Loading, AllProduct, TokenDenom, ProductUin } from '_molecules';

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

    // renderProduct = ({ item }) => {
    //     return (
    //         <TouchableOpacity style={[styles.ViewProductItem, { width: width / 2 -32 , height: height / 2 - 130 }, style.shadow]} onPress={this.renderProductDetail}>
    //             <Image source={item.image} style={{ width: width / 2-32, height: 139 }}></Image>
    //             <Text style={{ fontSize: 15, padding: 5, textAlign: 'center' }}>{item.name}</Text>
    //             <Text style={{ color: color.s600 }}>{item.price}</Text>
    //         </TouchableOpacity>
    //     )
    // }


    render() {
        const initialLayout = { width: Dimensions.get('window').width };
        const {product, paket} = this.setState ;
        return (
            <View style={{ flex: 1 }}>
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
                    {/* <FlatList
                        data={this.state.product}
                        keyExtractor={item => item.id}
                        renderItem={this.renderProduct}
                        numColumns={2}
                    /> */}

                    {/* <AllProduct paket={paket}  onPress={(paket) => setPaket( paket )} ></AllProduct> */}

                    <ProductUin product={product}  horizontal={false} numberOfColum={2} />

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

export default connect(mapStateToProps)(UinProduct);