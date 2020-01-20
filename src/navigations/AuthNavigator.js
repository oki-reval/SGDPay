import {createStackNavigator} from 'react-navigation-stack';

import Login from '_scenes/Auth/Login';

const AuthNavigatorConfig = {
	initialRouteName: 'Login',
	header: null,
	headerMode: 'none',
};

const RouteConfigs = {
	Login
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;