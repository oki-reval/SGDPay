import { createStackNavigator } from 'react-navigation-stack';

import QrCode from '_scenes/Transaction/QrCode';
import Transfer from '_scenes/Transaction/Transfer';

const TransactionNavigatorConfig = {
    initialRouteName: 'QrCode',
};

const RouteConfigs = {
    QrCode: {
        screen: QrCode,
        navigationOptions: {
            header: null
        }
    },
    Transfer:{
        screen:Transfer,
        navigationOptions:{
            header:null
        }
    }
};

const TransactionNavigator = createStackNavigator(RouteConfigs, TransactionNavigatorConfig);

TransactionNavigator.navigationOptions = ({ navigation }) => {
    tabBarVisible = false;
    return {
        tabBarVisible
    }
}

export default TransactionNavigator;