import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
<<<<<<< HEAD
import HomeStack from './HomeNavigator';
import ProfileStack from './ProfileNavigator';
import TransactionStack from './TransactioNavigator';
=======
import HomeStack from '_navigations/HomeNavigator';
import ProfileStack from '_navigations/ProfileNavigator';
import verifikasi from '_scenes/Profile/verifikasi';
>>>>>>> cac643354922bf285dd5b3d014dadf39f55f4b13
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { color } from '_styles';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import conf from '../assets/fonts/selection.json'

const Icon = createIconSetFromIcoMoon(conf);

const TabNavigatorConfig =
{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName == 'Home') {
                iconName = `home`;
            } else if (routeName == 'Scan') {
                iconName = `home`;
            } else if (routeName == 'Profile') {
                iconName = `profile`;
            }
            if (routeName == 'Scan') {
                return (
                    <View style={{ backgroundColor: color.primary, height: 55, width: 55, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome name='qrcode' color='#fff' size={28} />
                    </View>
                )
            }
            return <Icon name={iconName} size={20} color={tintColor} />
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
    Scan: {
        screen: TransactionStack,
        navigationOptions: {
            tabBarLabel: ' '
        }
    },
    Profile: {
        screen: ProfileStack,
    }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;