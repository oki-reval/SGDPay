import React, {useState} from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Input, ButtonGradient } from '_atoms';
import { withNavigation } from 'react-navigation';
import Axios from 'axios';

const Tagihan = (props) => {
    const [value, setValue] = useState(" ");
    const [loading, setLoading] = useState(false);

    const getInquiry = () =>{
        setLoading(true)
        Axios.post('pln/postpaid',{
            type : 'inquiry',
            billNumber : value, 
        }).finally( () => setLoading(false)

        ).then( res => {
            console.log(res)
            props.navigation.navigate('ListrikPembayaran',{data:res.data, type:'postpaid'})
        }).catch( error => {
            console.log(error.response)
            Alert.alert(
                'PERHATIAN !',
                error.response.data.message
            )
        })
    }

    return (
        <View style={[styles.scene, { backgroundColor: '#fff', padding: 10 }]}>
            <View style={{ flex: 1 }}>
                <Input value={value} onChangeText={(v)=>setValue(v)} keyboardType='number-pad' label='Nomor Pelanggan Listrik' placeholder='010XXXXXXX' />
            </View>
            <ButtonGradient disabled={!value} loading={loading} title='Selanjutnya' onPress={() => getInquiry()}/>
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

export default withNavigation (Tagihan);