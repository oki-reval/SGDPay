import React from 'react';
import { View, Text, Dimensions, StyleSheet, StatusBar, FlatList, TouchableHighlight } from 'react-native';
import { ButtonGradient, Input, Divider } from '_atoms';
import { EmptyList } from '_organisms';
import { color, style } from '_styles';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/min/locales';
import { convertToRp } from '_utils';

class TransferHistory extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                data: [],
                loading: false
            }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        this.setState({ loading: true })
        axios.get(`transfer/history`)
            .finally(() => this.setState({ loading: false }))
            .then(res => {
                console.log(res.data)
                this.setState({ data: res.data })
            }).catch(err => {
                Toast.show(err.response.data.message ?? 'Terjadi kesalahan teknis', Toast.LONG)
            })
    }

    renderItem = ({ item }) => {
        const status = item.status
        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate('HistoryDetail', { item })} >
                <View style={styles.wraperList}>
                    <View>
                        <Text style={styles.time}>{moment(item.created_at, 'YYYY-MM-DD HH:mm:ss').locale('id').format('dddd, DD MMM YYYY HH:ss')}</Text>
                        <Text style={styles.title}>{convertToRp(item.amount)}</Text>
                        <Text style={{color: color.g700}} numberOfLines={1}>{item.desc}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon size={14} name={`${status == 'success' ? 'check' : status == 'pending' ? 'minus' : 'times'}-circle`} color={status == 'success' ? color.success : status == 'pending' ? color.g500 : color.failed} />
                        <Text style={{fontWeight: 'bold', color: status == 'success' ? color.success : status == 'pending' ? color.g500 : color.failed, marginLeft: 5 }}>{status}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={styles.wraper}>
                <StatusBar translucent={false} backgroundColor={color.primary} barStyle='light-content' />
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                    ListEmptyComponent={<EmptyList title='Oops!' description='Kamu belum mempunyai riwayat transfer' />}
                    refreshing={this.state.loading}
                    onRefresh={this.getData}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: color.g100
    },
    wraperList: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderColor: color.g200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        color: color.g700
    },
})

export default withNavigation(TransferHistory);