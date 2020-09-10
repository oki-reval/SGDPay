import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import { color } from '_styles';
import { connect } from 'react-redux';
import { HeaderTransparent, Input, ButtonGradient, Button } from '_atoms';
import Icon from 'react-native-vector-icons/FontAwesome';

class UinProductCart extends React.Component {

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
                ]
            }
    }

    HandlePress = () => {
        this.props.navigation.goBack()
    }

    render() {
        const initialLayout = { width: Dimensions.get('window').width };
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
                <ScrollView >

                    <View style={[styles.ViewProductItem, { margin: 0 }]}>
                        <Text> Harga </Text>
                        <Text> Nama PRoduk</Text>
                        <Text>Rating </Text>
                    </View>
                    <View style={styles.ViewProduct}>

                    </View>

                    <View style={styles.ViewProductItem}>
                        <Text> Informasi Produk </Text>
                        <Text> lorem ipsum mnbd kjsdnbf kjdnm kjan kjnf knscn,s lknsdnc lksndcs lnksdc  kjsdnc lksdncm oknsdc,  </Text>
                    </View>

                    <View style={styles.ViewProduct}>

                    </View>

                    <View style={styles.ViewProductItem}>
                        <Text> PRoduk LAinya </Text>
                        <Text> Horizontall Scroll</Text>
                        <Image source={require('assets/icons/sgd-botol.png')} style={{height:100,width:100}}></Image>
                    </View>

                    
                    <View style={styles.ViewProduct}>

                    </View>

                    
                    <View style={styles.ViewProductItem}>
                        <ButtonGradient title='Checkotu'></ButtonGradient>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewProduct: {
        flex: 1,
        backgroundColor: color.g300,
        padding: 8,
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

export default connect(mapStateToProps)(UinProductCart);