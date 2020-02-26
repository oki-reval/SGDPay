import {createStackNavigator} from 'react-navigation-stack';

import Profile from '_scenes/Profile';
import Pin from '_scenes/Auth/Pin';

const ProfileNavigatorConfig = {
	initialRouteName: 'Profile',
};

const RouteConfigs = {
	Profile: {
		screen: Profile,
		navigationOptions: {
			
		}
	},
	Pin: {
		screen: Pin,
		navigationOptions: {
			
		}
	},
};

const ProfileNavigator = createStackNavigator(RouteConfigs, ProfileNavigatorConfig);

export default ProfileNavigator;