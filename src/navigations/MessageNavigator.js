import {createStackNavigator} from 'react-navigation-stack';

import Message from '_scenes/Message';
import { color } from '_styles';

const MessageNavigatorConfig = {
	initialRouteName: 'Message',
};

const RouteConfigs = {
	Message: {
		screen: Message,
		
	}
};

const MessageNavigator = createStackNavigator(RouteConfigs, MessageNavigatorConfig);

MessageNavigator.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
	  tabBarVisible = false;
	}
	return {
	  tabBarVisible
	}
  }

export default MessageNavigator;