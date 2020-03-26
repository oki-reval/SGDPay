import * as React from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Input, ButtonGradient } from '_atoms';

const Transfer = (props) => {
    const value = props.value
    return (
        <View style={[styles.scene, { backgroundColor: '#fff', padding: 10 }]}>
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#009BA0', '#65DA8D']} style={[styles.wraper, { height: 100, flexDirection: 'column' }]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 3 }} >
                    <Text style={[styles.text]}> Saldo Saat Ini </Text>
                    <Text style={[styles.text, { fontSize: 30, marginTop: 5 }]}>{props.saldo} </Text>
                </LinearGradient>
                <Input value={value.destination} onChangeText={(v) => props.setDest(v)} keyboardType='number-pad' label='Nomor Rekening Tujuan' placeholder='010XXXXXXX' />
                <Input value={value.amount} onChangeText={(v) => props.setAmount(v)} keyboardType='number-pad' label='Nominal Transfer' placeholder='0' />
                <Input value={value.description} onChangeText={(v) => props.setDesc(v)} abel='Keterangan' placeholder='Transfer' />
            </View>
            <ButtonGradient disabled={!value.destination||!value.description||!value.amount} loading={props.loading} title='Selanjutnya' onPress={props.onPress} />
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