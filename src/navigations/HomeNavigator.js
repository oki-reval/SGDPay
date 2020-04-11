import {createStackNavigator} from 'react-navigation-stack';

import Home from '_scenes/Home';
import Pin from '_scenes/Auth/Pin';
import Penarikan from '_scenes/Transaction/Penarikan';
import PenarikanInquiry from '_scenes/Transaction/PenarikanInquiry';
import Transfer from '_scenes/Transaction/Transfer';
import TransferInquiry from '_scenes/Transaction/TransferInquiry';
import PinTransaction from '_scenes/Transaction/PinTransaction';
import PulsaScreen from '_scenes/Transaction/PulsaScreen';
import Listrik from '_scenes/Transaction/Listrik';
import ListrikInquiry from '_scenes/Transaction/ListrikInquiry';
import PascaBayar from '_scenes/Transaction/PascaBayar';
import PascaBayarInquiry from '_scenes/Transaction/PascaBayarInquiry';
import PaketData from '_scenes/Transaction/PaketData';
import PaketDataInquiry from '_scenes/Transaction/PaketDataInquiry';
import HistoryDetail from '_scenes/Transaction/HistoryDetail';
import { color } from '_styles';

const HomeNavigatorConfig = {
	initialRouteName: 'Home',
};

const RouteConfigs = {
	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		},
	},
	Pin: {
		screen: Pin,
		navigationOptions: {
			header: null
		}
	},
	Transfer:{
        screen: Transfer,
        navigationOptions:{
            title: 'Transfer',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary,
                elevation: 0,
                shadowRadius: 0
            }
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
	},
	HistoryDetail:{
        screen: HistoryDetail,
        navigationOptions:{
            title: 'Detail Riwayat',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary
            }
        }
	},
	PulsaScreen:{
        screen: PulsaScreen,
        navigationOptions:{
            title: 'Pulsa Prabayar',
        }
    },
	Penarikan:{
		screen: Penarikan,
        navigationOptions:{
            title: 'Penarikan',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary,
                elevation: 0,
                shadowRadius: 0
            }
        }
	},
	PenarikanInquiry:{
        screen: PenarikanInquiry,
        navigationOptions:{
            title: 'Penarikan',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary
            }
        }
	},
	PinTransaction:{
        screen: PinTransaction,
        navigationOptions:{
            title: 'PIN Transfer',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary
            },
            headerLeft: null
        }
    },
    Listrik:{
		screen: Listrik,
        navigationOptions:{
            title: 'Listrik',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary,
                elevation: 0,
                shadowRadius: 0
            }
        }
	},
	ListrikInquiry:{
        screen: ListrikInquiry,
        navigationOptions:{
            title: 'ListrikInquiry',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary
            }
        }
    },
    PascaBayar:{
		screen: PascaBayar,
        navigationOptions:{
            title: 'PascaBayar',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary,
                elevation: 0,
                shadowRadius: 0
            }
        }
	},
	PascaBayarInquiry:{
        screen: PascaBayarInquiry,
        navigationOptions:{
            title: 'PascaBayarInquiry',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary
            }
        }
    },
    PaketData:{
		screen: PaketData,
        navigationOptions:{
            title: 'Paket Data',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary,
                elevation: 0,
                shadowRadius: 0
            }
        }
	},
	PaketDataInquiry:{
        screen: PaketDataInquiry,
        navigationOptions:{
            title: 'PaketDataInquiry',
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: color.primary
            }
        }
	},
};

const HomeNavigator = createStackNavigator(RouteConfigs, HomeNavigatorConfig);

HomeNavigator.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
	  tabBarVisible = false;
	}
	return {
	  tabBarVisible
	}
  }

export default HomeNavigator;