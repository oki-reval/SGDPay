import {createStackNavigator} from 'react-navigation-stack';
import Login from '_scenes/Auth/Login';

const AuthLoginNavigatorConfig = {
	initialRouteName: 'Login',
	header: null,
	headerMode: 'none',
};

const RouteConfigs = {
	Login
};

const AuthLoginNavigator = createStackNavigator(RouteConfigs, AuthLoginNavigatorConfig);

export default AuthLoginNavigator;