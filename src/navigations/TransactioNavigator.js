import { createStackNavigator } from 'react-navigation-stack';
import QrCode from '_scenes/Transaction/QrCode';
import TransferInquiry from '_scenes/Transaction/TransferInquiry';
import { color } from '_styles';

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
    TransferInquiry:{
        screen: TransferInquiry,
        navigationOptions:{
            title: 'Transfer',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary
            }
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