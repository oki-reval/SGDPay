import {createStackNavigator} from 'react-navigation-stack';

import Home from '_scenes/Home';
import Pin from '_scenes/Auth/Pin';
import Transfer from '_scenes/Transaction/Transfer';
import TransferInquiry from '_scenes/Transaction/TransferInquiry';
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