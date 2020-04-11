import * as React from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Input, ButtonGradient } from '_atoms';
import { Dropdown } from 'react-native-material-dropdown';
import { color, style } from '_styles';

const Penarikan = (props) => {
    const value = props.value
    let WithdrawalDest = [{value:'PT.Pos'}, {value:'Bank BRI'}, {value:'Bank BCA'}, {value:'Bank BNI'}, {value:'Bank Mandiri'}];
    return (
        <View style={[styles.scene, { backgroundColor: '#fff', padding: 10 }]}>
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#009BA0', '#65DA8D']} style={[styles.wraper, { height: 100, flexDirection: 'column' }]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 3 }} >
                    <Text style={[styles.text]}> Saldo Saat Ini </Text>
                    <Text style={[styles.text, { fontSize: 30, marginTop: 5 }]}>{props.saldo} </Text>
                </LinearGradient>
                <Text style={[{alignSelf:'center', marginVertical:10}]}> Pilih Tempat Penarikan Saldo yang Anda Inginkan</Text>
                <Text style={styles.label}>Tempat Penarikan </Text>
                <Dropdown value={value.Withdrawal} 
                    onChangeText = {(v) =>props.setWith(v)}  
                    data={WithdrawalDest} 
                    dropdownOffset={{ top: 0 }}
                    containerStyle={styles.container}
                    inputContainerStyle={{ borderBottomColor: 'transparent', marginBottom: 0, justifyContent: 'flex-start' }}
                    />
                <Input value={value.amount} onChangeText={(v) => props.setAmount(v)} keyboardType='number-pad' label='Nominal Penarikan' placeholder='0' />
                <Input value={value.description} onChangeText={(v) => props.setDesc(v)} label='Keterangan' placeholder='Penarikan' />
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
    },
    label:{
        fontSize: 16,
        fontWeight: 'bold',
        color: color.g800,
        marginTop: 5
    },
    container: {
        borderWidth: 1,
        marginTop: 5,
        height: 39,
        paddingTop: 6,
        paddingHorizontal: 8,
        borderColor: color.g400,
        backgroundColor: color.g100,
        borderRadius: 5
      },
});

export default Penarikan;