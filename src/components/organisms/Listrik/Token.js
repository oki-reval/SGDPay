import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, ButtonGradient, Divider } from '_atoms';
import { Loading, TokenDenom } from '_molecules';
import { withNavigation } from 'react-navigation';
import Axios from 'axios';

const Token = (props) => {
    const [npl, setNpl] = useState(" ");
    const [paket, setPaket] = useState({});
    const [loading, setLoading] = useState(false);

    const getInquiry = () => {
        Axios.post('pln/prepaid', {
            type: 'inquiry',
            billNumber: npl,
            nominalCode: paket.code
        }).finally(() => setLoading(false)

        ).then(res => {
            console.log(res)
            props.navigation.navigate('ListrikPembayaran',{data:res.data, type:'prepaid'})
        }).catch(error => {
            console.log(error.response)
        })
    }

    return (
        <View style={[styles.scene]}>
            <View style={{ flex: 1 }}>
                <View style={{ padding: 10 }}>
                    <Input value={npl} onChangeText={(v) => setNpl(v)} keyboardType='number-pad' label='Nomor Pelanggan Listrik' placeholder='010XXXXXXX' />
                </View>
                <Divider style={{ marginBottom: 10 }} />
                <TokenDenom paket={paket} onPress={(paket) => setPaket( paket )} />
            </View>
            <ButtonGradient style={{ marginVertical: 20, marginHorizontal: 10 }} disabled={!npl} loading={loading} title='Selanjutnya' onPress={() => getInquiry()} />
        </View>
    )
};

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    wraper: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 5
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
});

export default withNavigation (Token);