import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeStack from './HomeNavigator';
import ProfileStack from './ProfileNavigator';
import TransactionStack from './TransactioNavigator';
import MessageStack from './MessageNavigator';
import MoreStack from './MoreNavigator';
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
            } else if (routeName == 'Berita') {
                iconName = `th-large`;
            } else if (routeName == 'Scan') {
                iconName = `qrcode`;
            } else if (routeName == 'Pesan') {
                iconName = `message`;
            } else if (routeName == 'Profile') {
                iconName = `profile`;
            }
            if (routeName == 'Scan') {
                return (
                    <View style={{ backgroundColor: color.primary, height: 55, width: 55, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome name={iconName} color='#fff' size={28} />
                    </View>
                )
            }
            if (routeName == 'Berita') {
                return <FontAwesome name={iconName} color={tintColor} size={20} />
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
    Berita: {
        screen: MoreStack,
    },
    Scan: {
        screen: TransactionStack,
        navigationOptions: {
            tabBarLabel: ' '
        }
    },
    Pesan: {
        screen: MessageStack,
    },
    Profile: {
        screen: ProfileStack,
    },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;