import React from 'react';
import { Platform ,Dimensions } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Font } from 'expo';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import FormScreen from "../screens/FormScreen"


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Casa',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};
const FormStack = createStackNavigator({
  Form: FormScreen,
});

FormStack.navigationOptions = {
  tabBarLabel: 'Tu Opinion',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ContactStack = createStackNavigator({
  Contact: ContactScreen,
});

ContactStack.navigationOptions = {
  tabBarLabel: 'Contacto',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createMaterialTopTabNavigator({
  HomeStack,
  ContactStack,
  FormStack,
},
{
  tabBarOptions: {
    activeTintColor: '#ff3300',
    inactiveTintColor: 'black',
    labelStyle: {
      fontSize: Dimensions.get('window').width*0.04,
      fontFamily: "against_modern_football",

    },
    style: {
      backgroundColor: '#18d06c',
    },
  },
});
