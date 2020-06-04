import { createStackNavigator } from 'react-navigation-stack';
import QrCode from '_scenes/Transaction/QrCode';
import TransferInquiry from '_scenes/Transaction/TransferInquiry';
import PinTransaction from '_scenes/Transaction/PinTransaction';
import PenarikanInquiry from '_scenes/Transaction/PenarikanInquiry';
import ListrikInquiry from '_scenes/Transaction/ListrikInquiry';
import PascaBayarInquiry from '_scenes/Transaction/PascaBayarInquiry';
import PaketDataInquiry from '_scenes/Transaction/PaketDataInquiry';
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
    // TransferInquiry:{
    //     screen: TransferInquiry,
    //     navigationOptions:{
    //         title: 'Transfer',
    //         headerTintColor: '#fff',
    //         headerStyle:{
    //             backgroundColor: color.primary
    //         }
    //     }
    // },
    // PinTransaction:{
    //     screen: PinTransaction,
    //     navigationOptions:{
    //         title: 'PIN Transfer',
    //         headerTintColor: '#fff',
    //         headerStyle:{
    //             backgroundColor: color.primary
    //         },
    //         headerLeft: null
    //     }
    // }
    // TransferInquiry:{
    //     screen: TransferInquiry,
    //     navigationOptions:{
    //         title: 'Transfer',
    //         headerTintColor: '#fff',
    //         headerStyle:{
    //             backgroundColor: color.primary
    //         }
    //     }
    // },
    // PenarikanInquiry:{
    //     screen: PenarikanInquiry,
    //     navigationOptions:{
    //         title:'Penarikan',
    //         headerTintColor:'#fff',
    //         headerStyle:{
    //             backgroundColor: color.primary
    //         }
    //     }
    // },
    // ListrikInquiry:{
    //     screen: ListrikInquiry,
    //     navigationOptions:{
    //         title:'Listrik',
    //         headerTintColor:'#fff',
    //         headerStyle:{
    //             backgroundColor: color.primary
    //         }
    //     }
    // },
    // PascaBayarInquiry:{
    //     screen: PascaBayarInquiry,
    //     navigationOptions:{
    //         title:'Pulsa',
    //         headerTintColor:'#fff',
    //         headerStyle:{
    //             backgroundColor: color.primary
    //         }
    //     }
    // },
    // PaketDataInquiry:{
    //     screen: PaketDataInquiry,
    //     navigationOptions:{
    //         title:'Paket Data',
    //         headerTintColor:'#fff',
    //         headerStyle:{
    //             backgroundColor: color.primary
    //         }
    //     }
    // },
};

const TransactionNavigator = createStackNavigator(RouteConfigs, TransactionNavigatorConfig);

TransactionNavigator.navigationOptions = ({ navigation }) => {
    tabBarVisible = false;
    return {
        tabBarVisible
    }
}

export default TransactionNavigator;