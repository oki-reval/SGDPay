import {createStackNavigator} from 'react-navigation-stack';
import Cart from '_scenes/Cart'
import { color } from '_styles';

const cartNavigatorConfig = {
    initialRouteName: 'Cart',
};

const RouteConfigs = {
    Cart: {
        screen:Cart,
        navigationOptions: {
			title:'Keranjang',
			headerTintColor:'#fff',
			header:null
		}
    },
    
}

const CartNavigator = createStackNavigator(RouteConfigs, cartNavigatorConfig);

CartNavigator.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
	  tabBarVisible = false;
	}
	return {
	  tabBarVisible
	}
  }

export default CartNavigator;