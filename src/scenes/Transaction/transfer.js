import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { color } from '_styles';
import { connect } from 'react-redux';
import { Transfer as Transfers, TransferHistory } from '_organisms';
import { Loading } from '_molecules';
import Axios from 'axios';
import Toast from 'react-native-simple-toast';

class Transfer extends React.Component {
	constructor(props) {
        super(props),
            this.state = {
				index: 0,
				loading: false,
				routes: [
					{ key: 'first', title: 'Transfer' },
					{ key: 'second', title: 'Riwayat' }
				]
			}
	}

	submitInquiry = ({description, destination, amount}) => {
		this.setState({ loading: true })
		Axios.post(`/transfer`, {
			description,
			destination,
			amount
		}).finally(() => this.setState({ loading: false })
		).then(res => {
			this.props.navigation.navigate('TransferInquiry', {data: res.data})
			console.log(res)
		}).catch(err => {
			console.log(err.response.data.message)
			Toast.show(err.response.data.message??'Terjadi kesalahan teknis', Toast.LONG)
		})
	}

	FirstRoute = () => {
		return (
			<Transfers
				dest={this.props.navigation.getParam('dest')}
				saldo={this.props.wallet.saldo}
				onPress={(v)=>this.submitInquiry(v)}
			/>
		)
	}

	SecondRoute = () => (
		<TransferHistory />
	);


	renderTabBar = props => {
		return (
			<TabBar
				{...props}
				indicatorStyle={{ backgroundColor: 'white' }}
				style={[{ backgroundColor: color.primary },]}
				onPress={(x) => alert('asd')}
			/>
		)
	};

	renderScene = SceneMap({
		first: this.FirstRoute,
		second: this.SecondRoute,
	});

	render() {
		const initialLayout = { width: Dimensions.get('window').width };
		const { index, routes, loading } = this.state
		return (
			<View style={{ flex: 1 }}>
				<StatusBar translucent={false} backgroundColor={color.primary} barStyle='light-content' />
				<TabView
					navigationState={{ index, routes }}
					renderScene={this.renderScene}
					renderTabBar={this.renderTabBar}
					onIndexChange={(index) => this.setState({ index })}
					initialLayout={initialLayout}
				/>
				<Loading isLoading={loading} />
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user.data,
		wallet: state.user.wallet
	}
}

export default connect(mapStateToProps)(Transfer);