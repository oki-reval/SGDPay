import {createStackNavigator} from 'react-navigation-stack';

import Profile from '_scenes/Profile';
import Pin from '_scenes/Auth/Pin';
import verifikasi from '_scenes/Profile/verifikasi';

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
			header: null
		}
	},
	verifikasi:{
		screen:verifikasi,
		navigationOptions:{
		}
	}
};

const ProfileNavigator = createStackNavigator(RouteConfigs, ProfileNavigatorConfig);

ProfileNavigator.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
	  tabBarVisible = false;
	}
	return {
	  tabBarVisible
	}
  }

export default ProfileNavigator;