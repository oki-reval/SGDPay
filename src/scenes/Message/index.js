import React from 'react';
import { View, Text, Dimensions, StyleSheet, StatusBar, FlatList, TouchableHighlight } from 'react-native';
import { ButtonGradient, Input, Divider } from '_atoms';
import { EmptyList } from '_organisms';
import { color, style } from '_styles';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import moment from 'moment';
import 'moment/min/locales';

class Message extends React.Component {
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
        axios.get(`notif`)
            .finally(() => this.setState({ loading: false }))
            .then(res => {
                console.log(res.data)
                this.setState({ data: res.data })
            }).catch(err => {
                Toast.show(err.response.data.message ?? 'Terjadi kesalahan teknis', Toast.LONG)
            })
    }

    renderItem = ({ item }) => {
        return (
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('MessageDetail', {item})} >
                <View style={styles.wraperList}>
                    <Text style={styles.time}>{moment(item.transaction_time, 'YYYYMMDDHHmmss').locale('id').format('dddd, DD MMM YYYY HH:ss')}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.desc} numberOfLines={1}>{item.description}</Text>
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
                    ItemSeparatorComponent={Divider}
                    ListEmptyComponent={<EmptyList title='Oops!' description='Belum ada pesan masuk saat ini.' />}
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
        color: color.g700
    },
})

export default Message;