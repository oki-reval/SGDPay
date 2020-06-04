import React from 'react';
import { View, Text, Dimensions, StyleSheet, StatusBar, FlatList, TouchableHighlight } from 'react-native';
import { ButtonGradient, Input, Divider } from '_atoms';
import { EmptyList } from '_organisms';
import { color, style } from '_styles';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import { convertToRp } from '_utils';
import moment from 'moment';
import 'moment/min/locales';

const MessageDetail = (props) => {

    const data = props.navigation.getParam('item')
    return (
        <View style={styles.wraper}>
            <View style={styles.wraperList}>
                <View>
                    <Text style={styles.time}>{moment(data.transaction_time, 'YYYYMMDDHHmmss').locale('id').format('dddd, DD MMM YYYY HH:ss')}</Text>
                    <Text style={[styles.title, {fontSize: 18}]}>{data.title}</Text>
                </View>
            </View>
            <Divider />
            <View style={styles.wraperList}>
                <Text style={[styles.title, { color: color.g700 }]}>Detail</Text>
                <Text style={{ color: color.g700 }} >{data.description}</Text>
            </View>
            <View style={[styles.wraperList, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <View>
                    <Text style={styles.desc}>Nominal Transfer</Text>
                    <Text style={styles.desc}>Pengirim</Text>
                    <Text style={styles.desc}>Tanggal Transaksi</Text>
                    <Text style={styles.desc}>Keterangan</Text>
                    <Text style={styles.desc}>ID Transaksi</Text>
                </View>
                <View>
                    <Text style={styles.value}>{convertToRp(data.amount)}</Text>
                    <Text style={styles.value}>{data.sender}</Text>
                    <Text style={styles.value}>{moment(data.transaction_time, 'YYYYMMDDHHmmss').locale('id').format('DD MMM YYYY')}</Text>
                    <Text style={styles.value}>{data.transaction_desc}</Text>
                    <Text style={styles.value}>{data.transaction_id}</Text>
                </View>
            </View>
            <Divider />
            <View style={styles.wraperList}>
                <Text style={[styles.title, { color: color.g700 }]}>ID Transaksi</Text>
                <Text style={styles.desc} >{data.transaction_id}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: color.g100
    },
    wraperList: {
        padding: 10,
        backgroundColor: '#fff'
    },
    time: {
        fontSize: 12,
        color: color.g500
    },
    title: {
        fontSize: 16,
        color: color.primary,
        fontWeight: 'bold'
    },
    desc: {
        color: color.g700,
        marginBottom: 10
    },
    value: {
        color: color.g700,
        fontWeight: 'bold',
        textAlign: 'right',
        marginBottom: 10
    }
})

export default MessageDetail;