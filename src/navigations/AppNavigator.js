import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeStack from '_navigations/HomeNavigator';
import ProfileStack from '_navigations/ProfileNavigator';
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
            } else if (routeName == 'Profile') {
                iconName = `profile`;
            }
            return <Icon name={iconName} size={20} color={tintColor} />
        },
    }),
    tabBarOptions: {
        activeTintColor: color.primary,
        inactiveTintColor: color.g400
    }
};

const RouteConfigs = {
    Home: {
        screen: HomeStack,
    },
    Profile: {
        screen: ProfileStack,
    },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;