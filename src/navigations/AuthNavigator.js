import {createStackNavigator} from 'react-navigation-stack';
import Intro from '_scenes/Auth/Intro';
import Login from '_scenes/Auth/Login';

const AuthNavigatorConfig = {
	initialRouteName: 'Intro',
	header: null,
	headerMode: 'none',
};

const RouteConfigs = {
	Intro,Login
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;