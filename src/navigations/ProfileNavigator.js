import {createStackNavigator} from 'react-navigation-stack';

import Profile from '_scenes/Profile';
import verifikasi from '_scenes/Profile/verifikasi';

const ProfileNavigatorConfig = {
	initialRouteName: 'Profile',
};

const RouteConfigs = {
	Profile, verifikasi
};

const ProfileNavigator = createStackNavigator(RouteConfigs, ProfileNavigatorConfig);

export default ProfileNavigator;