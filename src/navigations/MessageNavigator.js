import {createStackNavigator} from 'react-navigation-stack';

import Message from '_scenes/Message';
import MessageDetail from '_scenes/Message/MessageDetail';
import { color } from '_styles';

const MessageNavigatorConfig = {
	initialRouteName: 'Message',
};

const RouteConfigs = {
	Message: {
        screen: Message,
        navigationOptions: {
            title: 'Pesan',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary,
            }
		},
		
	},
	MessageDetail: {
        screen: MessageDetail,
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary,
            }
		},
		
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