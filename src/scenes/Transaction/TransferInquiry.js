import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Input, ButtonGradient } from '_atoms';
import { color } from '_styles';
import { convertToRp } from '_utils';
import axios from 'axios'
import moment from 'moment';
import 'moment/min/locales';

const TransferInquiry = (props) => {
    const data = props.navigation.getParam('data')
    const [loading, setLoading] = useState(false)

    const transfer = () => {
        setLoading(true)
		axios.post(`/transfer`, {
			description: data.description,
			destination: data.dest_account_no,
            amount: data.amount,
            type: 'transfer'
		}).finally(() => setLoading(false)
		).then(res => {
			console.log(res)
            props.navigation.navigate('PinTransaction', {html: res.data.html, data})
		}).catch(err => {
			console.log(err)
		})
    }
    
    return (
        <View style={[styles.scene]}>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>Nominal Transfer</Text>
                <Text style={styles.value}>{convertToRp(data.amount)}</Text>
                <Text style={styles.title}>Rekening Tujuan</Text>
                <Text style={styles.value}>{data.dest_account_no}</Text>
                <Text style={styles.title}>Pemilik Rekening Tujuan</Text>
                <Text style={styles.value}>{data.dest_customer_name}</Text>
                <Text style={styles.title}>Biaya Admin</Text>
                <Text style={styles.value}>{convertToRp(data.fee_amount)}</Text>
                <Text style={styles.title}>Tanggal Transaksi</Text>
                <Text style={styles.value}>{moment(data.trx_date_time,'YYYYMMDDHHmmss').locale('id').format('dddd, DD MMM YYYY HH:ss')}</Text>
                <Text style={styles.title}>ID Transaksi</Text>
                <Text style={styles.value}>{data.system_trace_audit}</Text>
                <Text style={styles.title}>Keterangan</Text>
                <Text style={styles.value}>{data.description}</Text>
            </View>
            <ButtonGradient loading={loading} disabled={loading} title='Transfer' onPress={transfer} />
        </View>
    )
}

const styles = StyleSheet.create({
    scene: {
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
    }
});

export default TransferInquiry;