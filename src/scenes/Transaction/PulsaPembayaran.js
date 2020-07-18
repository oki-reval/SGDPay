import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text, Image, FlatList, Alert } from 'react-native';
import { connect } from 'react-redux';
import { color, style } from '_styles';
import { Input, ButtonGradient } from '_atoms';
import Axios from 'axios';

class PulsaPembayaran extends React.Component {
	constructor(props) {
		super(props),
			this.state = {
				index: 0,
				loading: false,
				data: props.navigation.getParam('data'),
				type: props.navigation.getParam('type'),
				total: '',
				value: ''
			}
	}

	renderItem=({item, index})=>{
		return(
			<View style={{borderBottomWidth: index % 2 == 0 ? 0:2, marginBottom: index % 2 == 0? 0:10,
			borderBottomColor:index % 2 == 0 ? '#fff': color.g300}}>
				<Text style={[styles.Text, { color: index % 2 == 0 ? 'grey' : 'black', marginVertical: index % 2 == 0? 0:5, }]}>{item}</Text>
			</View>
		)
	}
	
	getPayment = () => {
		const {data, type} = this.state;

		Axios.post(`/pln/${type}`,{
            type : 'payment',
			billNumber : data.billNumber,
			paymentCode: data.paymentCode,
			nominalCode: data.nominalCode 
        }).then( res => {
			console.log(res)
			Alert.alert(
				'PEMBAYARAN BERHASIL !'
			)
        }).catch( error => {
			console.log(error.response)
			Alert.alert(
				'PEMBAYARAN GAGAL !',
				error.response.data.message
			)
        })
	}
	render() {
		const initialLayout = { width: Dimensions.get('window').width };
		const { index, routes, loading, data } = this.state;
		const a = data.info
		const x = a.split('|').join('\n')
		const y = x.split(' ').join(' ')
		const z = y.split(/[\:\n]+/)
		const tb = parseInt(data.admin) + parseInt(data.nominal)
		return (
			<ScrollView style={styles.wraper}>
				<View style={styles.wraperList}>
					<Image source={require('_assets/icons/listrik.png')} style={styles.icon} resizeMode='contain'></Image>
					<View style={{ alignSelf: 'center' }}>
						<Text style={styles.Text}>Listrik</Text>
						<Text style={styles.TextBlur}>Tagihan PLN</Text>

					</View>

				</View>

				<View style={styles.wraperListVert}>
					<View style={{ height: 1, width: '100%', backgroundColor: color.g400, marginVertical: 10 }} />

					<FlatList
						data={z}
						keyExtractor={(item, index) => index.toString()}
						renderItem={this.renderItem}
					/>
					<Text style={[styles.TextBlur, { textAlign: "center" }]}>{tb} </Text>
					<ButtonGradient loading={loading} title='Bayar' onPress={() => this.getPayment()} ></ButtonGradient>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	wraper: {
		flex: 1,
	},
	wraperList: {
		flexDirection: "row",
		padding: 10,
		backgroundColor: '#fff'
	},
	wraperListVert: {
		padding: 10,
		backgroundColor: '#fff'
	},
	body: {
		marginTop: 10
	},
	icon: {
		height: 60,
		width: 60,
	},
	Text: {
		fontSize: 16,
		color: color.black,
		flex: 1
	},
	TextBlur: {
		fontSize: 16,
		color: color.g500,
	}
})
const mapStateToProps = state => {
	return {
		user: state.user.data,
		wallet: state.user.wallet
	}
}


export default connect(mapStateToProps)(PulsaPembayaran);