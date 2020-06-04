import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Input, ButtonGradient } from '_atoms';
import { convertToRp } from '_utils'

const Transfer = (props) => {
    const [value, setValue] = useState({destination: props.dest, amount: '', description: ''})
    return (
        <View style={[styles.scene, { backgroundColor: '#fff', padding: 10 }]}>
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#009BA0', '#65DA8D']} style={[styles.wraper, { height: 100, flexDirection: 'column' }]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 3 }} >
                    <Text style={[styles.text]}> Saldo Saat Ini </Text>
                    <Text style={[styles.text, { fontSize: 30, marginTop: 5 }]}>{convertToRp(props.saldo)} </Text>
                </LinearGradient>
                <Input value={value.destination} onChangeText={(v)=>setValue({...value, destination: v})} keyboardType='number-pad' label='Nomor Rekening Tujuan' placeholder='010XXXXXXX' />
                <Input value={value.amount} onChangeText={(v)=>setValue({...value, amount: v})} keyboardType='number-pad' label='Nominal Transfer' placeholder='0' />
                <Input value={value.description} onChangeText={(v)=>setValue({...value, description: v})} label='Keterangan' placeholder='Keterangan' />
            </View>
            <ButtonGradient disabled={!value.destination || !value.amount} loading={props.loading} title='Selanjutnya' onPress={()=>props.onPress(value)} />
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

export default Transfer;