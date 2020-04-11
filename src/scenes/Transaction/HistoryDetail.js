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
import Icon from 'react-native-vector-icons/FontAwesome';

const MessageDetail = (props) => {

    const data = props.navigation.getParam('item')
    const status = data.status
    return (
        <View style={styles.wraper}>
            <View style={styles.wraperList}>
                <View>
                    <Text style={styles.time}>{moment(data.created_at, 'YYYY-MM-DD HH:mm:ss').locale('id').format('dddd, DD MMM YYYY HH:ss')}</Text>
                    <View style={styles.header}>
                        <Text style={[{ fontSize: 18, fontWeight: 'bold', color: status == 'success' ? color.success : status == 'pending' ? color.g500 : color.failed }]}>{status.toUpperCase()}</Text>
                        <Icon size={22} name={`${status == 'success' ? 'check' : status == 'pending' ? 'minus' : 'times'}-circle`} color={status == 'success' ? color.success : status == 'pending' ? color.g500 : color.failed} />
                    </View>
                </View>
            </View>
            <Divider />
            <View style={styles.wraperList}>
                <Text style={styles.title}>Nominal Transfer</Text>
                <Text style={styles.value}>{convertToRp(data.amount)}</Text>
                <Text style={styles.title}>Rekening Tujuan</Text>
                <Text style={styles.value}>{data.destination}</Text>
                <Text style={styles.title}>Tanggal Transaksi</Text>
                <Text style={styles.value}>{moment(data.created_at, 'YYYY-MM-DD HH:mm:ss').locale('id').format('dddd, DD MMM YYYY HH:ss')}</Text>
                <Text style={styles.title}>ID Transaksi</Text>
                <Text style={styles.value}>{data.system_trace_audit}</Text>
                <Text style={styles.title}>Keterangan</Text>
                <Text style={styles.value}>{data.desc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        fontSize: 12,
        color: color.g500
    },
    value: {
        fontSize: 16,
        color: color.g900,
        fontWeight: 'bold',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: color.g300,
        paddingBottom: 10,
        color: color.g700
    }
})

export default MessageDetail;