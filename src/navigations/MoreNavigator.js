import {createStackNavigator} from 'react-navigation-stack';

import More from '_scenes/More';
import { color } from '_styles';

const MoreNavigatorConfig = {
	initialRouteName: 'More',
};

const RouteConfigs = {
	More: {
		screen: More,
		
	}
};

const MoreNavigator = createStackNavigator(RouteConfigs, MoreNavigatorConfig);

MoreNavigator.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
	  tabBarVisible = false;
	}
	return {
	  tabBarVisible
	}
  }

export default MoreNavigator;