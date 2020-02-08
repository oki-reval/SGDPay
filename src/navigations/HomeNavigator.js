import {createStackNavigator} from 'react-navigation-stack';

import Home from '_scenes/Home';

const HomeNavigatorConfig = {
	initialRouteName: 'Home',
};

const RouteConfigs = {
	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	},
};

const HomeNavigator = createStackNavigator(RouteConfigs, HomeNavigatorConfig);

export default HomeNavigator;