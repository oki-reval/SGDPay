import {createStackNavigator} from 'react-navigation-stack';

import Home from '_scenes/Home';
import Pin from '_scenes/Auth/Pin';
import Transfer from '_scenes/Transaction/Transfer';
import TransferInquiry from '_scenes/Transaction/TransferInquiry';
import PinTransaction from '_scenes/Transaction/PinTransaction';
import PulsaScreen from '_scenes/Transaction/PulsaScreen';
import { color } from '_styles';

const HomeNavigatorConfig = {
	initialRouteName: 'Home',
};

const RouteConfigs = {
	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		},
	},
	Pin: {
		screen: Pin,
		navigationOptions: {
			header: null
		}
	},
	Transfer:{
        screen: Transfer,
        navigationOptions:{
            title: 'Transfer',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary,
                elevation: 0,
                shadowRadius: 0
            }
        }
    },
	TransferInquiry:{
        screen: TransferInquiry,
        navigationOptions:{
            title: 'Transfer',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary
            }
        }
	},
	PulsaScreen:{
        screen: PulsaScreen,
        navigationOptions:{
            title: 'Pulsa Prabayar',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary
            }
        }
	},
	PinTransaction:{
        screen: PinTransaction,
        navigationOptions:{
            title: 'PIN Transfer',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary
            },
            headerLeft: null
        }
    }
};

const HomeNavigator = createStackNavigator(RouteConfigs, HomeNavigatorConfig);

HomeNavigator.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
	  tabBarVisible = false;
	}
	return {
	  tabBarVisible
	}
  }

export default HomeNavigator;