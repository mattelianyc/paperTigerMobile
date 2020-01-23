import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import ArtScreen from '../screens/ArtScreen';
import BioScreen from '../screens/BioScreen';
import ChatScreen from '../screens/ChatScreen';
import IceCreamScreen from '../screens/IceCreamScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const BioStack = createStackNavigator(
  {
    Bio: BioScreen,
  },
  config
);

BioStack.navigationOptions = {
  // tabBarLabel: '',
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `${focused ? 'md-paw' : 'md-paw'}`: 'md-paw'} />
    ),
};

BioStack.path = '';

const ArtStack = createStackNavigator(
  {
    Art: ArtScreen,
  },
  config
);

ArtStack.navigationOptions = {
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `${focused ? 'md-musical-notes' : 'md-musical-notes'}`: 'md-musical-notes'} />
  ),
};

ArtStack.path = '';

const NewsStack = createStackNavigator(
  {
    News: NewsScreen,
  },
  config
);

NewsStack.navigationOptions = {
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `${focused ? 'md-pulse' : 'md-pulse'}`: 'md-pulse'} />
  ),
};

NewsStack.path = '';

const IceCreamStack = createStackNavigator(
  {
    IceCream: IceCreamScreen,
  },
  config
);

IceCreamStack.navigationOptions = {
  // tabBarLabel: '',
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `${focused ? 'ios-ice-cream' : 'ios-ice-cream'}`: 'ios-ice-cream'} />
    ),
};

IceCreamStack.path = '';

const ChatStack = createStackNavigator(
  {
    Chat: ChatScreen,
  },
  config
);

ChatStack.navigationOptions = {
  // tabBarLabel: '',
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `${focused ? 'md-heart' : 'md-heart'}`: 'md-heart'} />
  ),
};

ChatStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   // tabBarLabel: '',
//   tabBarOptions: {
//     showLabel: false
//   },
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-help-buoy' : 'md-help-buoy'} />
//   ),
// };

// SettingsStack.path = '';

const tabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Bio: BioStack,
      Treats: IceCreamStack,
      News: NewsStack,
      Art: ArtStack,
      Social: ChatStack,
    },
    {
      initialRouteName: "News",
      tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          borderColor: 'transparent'  
        },
      }
    }
  )
) 

tabNavigator.path = '';

export default tabNavigator;
