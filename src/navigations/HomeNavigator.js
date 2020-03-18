import {createStackNavigator} from 'react-navigation-stack';

import Home from '_scenes/Home';
import Pin from '_scenes/Auth/Pin';

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