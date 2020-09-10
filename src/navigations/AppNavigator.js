import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeStack from './HomeNavigator';
import ProfileStack from './ProfileNavigator';
import TransactionStack from './TransactioNavigator';
import MessageStack from './MessageNavigator';
import MoreStack from './MoreNavigator';
import ProductStack from './ProductListNavigator';
import CartStack from './CartNavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { color } from '_styles';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import conf from '../assets/fonts/selection.json';
// import Icons from '_atoms/Icons';

const Icons = createIconSetFromIcoMoon(conf);

const TabNavigatorConfig =
{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName == 'Home') {
                iconName = `home`;
            } else if (routeName == 'Belanja') {
                iconName = `th-large`;
            } else if (routeName == 'Scan') {
                iconName = `qrcode`;
            } else if (routeName == 'Pesan') {
                iconName = `message`;
            } else if (routeName == 'Profile') {
                iconName = `profile`;
            } else if (routeName == 'Keranjang'){
                iconName = `cart-plus`
            }
            if (routeName == 'Scan') {
                return (
                    <View style={{ backgroundColor: color.primary, height: 55, width: 55, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome name={iconName} color='#fff' size={28} />
                    </View>
                )
            }
            if (routeName == 'Belanja') {
                return <FontAwesome name={iconName} color={tintColor} size={20} />
            }
            if (routeName == 'Keranjang'){
                // return <Icons src={require('_assets/icons/ic_tabbar_cart.png')} color={tintColor} size={25}  />
                return <Icon name='cart-plus' color={tintColor} size={30} style={{ paddingHorizontal: 10 }} />
            }
            return <Icons name={iconName} size={20} color={tintColor} />
        },
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: color.primary,
            inactiveTintColor: color.g400,
        },
    }),
};

const RouteConfigs = {
    Home: {
        screen: HomeStack,
    },
    Belanja: {
        screen: ProductStack,
    },
    Scan: {
        screen: TransactionStack,
        navigationOptions: {
            tabBarLabel: ' '
        }
    },
    Keranjang: {
        screen: CartStack,
    },
    Profile: {
        screen: ProfileStack,
    },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;