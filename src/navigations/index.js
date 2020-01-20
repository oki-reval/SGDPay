import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import AuthLoading from '_scenes/Auth/AuthLoading';

const AppContainer = createSwitchNavigator(
	{
		Auth: AuthNavigator,
        App: AppNavigator,
        MiddleWare: AuthLoading
	},
	{
		initialRouteName: 'MiddleWare',
	},
);

export default createAppContainer(AppContainer);