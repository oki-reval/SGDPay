import {createStackNavigator} from 'react-navigation-stack';

import Profile from '_scenes/Profile';
<<<<<<< HEAD
import Pin from '_scenes/Auth/Pin';
=======
import verifikasi from '_scenes/Profile/verifikasi';
>>>>>>> cac643354922bf285dd5b3d014dadf39f55f4b13

const ProfileNavigatorConfig = {
	initialRouteName: 'Profile',
};

const RouteConfigs = {
<<<<<<< HEAD
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
=======
	Profile, verifikasi
>>>>>>> cac643354922bf285dd5b3d014dadf39f55f4b13
};

const ProfileNavigator = createStackNavigator(RouteConfigs, ProfileNavigatorConfig);

export default ProfileNavigator;