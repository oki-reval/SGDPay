import {createStackNavigator} from 'react-navigation-stack';

import Product from '_scenes/Product';
import DetailProduct from '_scenes/Product/DetailProduct';
import { color } from '_styles';

const ProductListNavigatorConfig = {
    initialRouteName: 'Product',
};

const RouteConfigs = {
    Product: {
        screen:Product,
        navigationOptions: {
			header: null
		}
    },
    DetailProduct:{
        screen: DetailProduct,
        navigationOptions: {
			header: null
		}
    }
    
}

const ProductNavigator = createStackNavigator(RouteConfigs, ProductListNavigatorConfig);

ProductNavigator.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
	  tabBarVisible = false;
	}
	return {
	  tabBarVisible
	}
  }

export default ProductNavigator;