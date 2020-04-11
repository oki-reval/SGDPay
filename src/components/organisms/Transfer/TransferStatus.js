import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Button } from '_atoms';
import { color } from '_styles';
import { convertToRp } from '_utils';
import moment from 'moment';
import 'moment/min/locales';
import Icon from 'react-native-vector-icons/Ionicons'

const PinStatus = (props) => {
    const data = props.data
    return (
        <View style={styles.wrap}>
            <Icon name={`ios-${props.failed ? 'close' : 'checkmark'}-circle-outline`} style={{ color: props.failed ? color.success : color.failed, alignSelf: 'center' }} size={100} />
            <Text style={{fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: props.failed ? color.success : color.failed, marginBottom: 20}}>Transfer {props.failed? 'Gagal' : 'Berhasil'}</Text>
            <ScrollView style={{ flex: 1 }}>
                <Text style={styles.title}>Nominal Transfer</Text>
                <Text style={styles.value}>{convertToRp(data.amount)}</Text>
                <Text style={styles.title}>Rekening Tujuan</Text>
                <Text style={styles.value}>{data.dest_account_no}</Text>
                <Text style={styles.title}>Pemilik Rekening Tujuan</Text>
                <Text style={styles.value}>{data.dest_customer_name}</Text>
                <Text style={styles.title}>Biaya Admin</Text>
                <Text style={styles.value}>{convertToRp(data.fee_amount)}</Text>
                <Text style={styles.title}>Tanggal Transaksi</Text>
                <Text style={styles.value}>{moment(data.trx_date_time, 'YYYYMMDDHHmmss').locale('id').format('dddd, DD MMM YYYY HH:ss')}</Text>
                <Text style={styles.title}>ID Transaksi</Text>
                <Text style={styles.value}>{data.system_trace_audit}</Text>
                <Text style={styles.title}>Keterangan</Text>
                <Text style={styles.value}>{data.description}</Text>
            </ScrollView>
            <Button title={'Ke Menu Utama'} onPress={props.onPress} />
        </View>
    )
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    title: {
        fontSize: 12,
        color: color.g700
    },
    value: {
        fontSize: 16,
        color: color.g900,
        fontWeight: 'bold',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: color.g300,
        paddingBottom: 10
    },
})
export default PinStatus