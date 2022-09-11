/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./app/screens/Home";
import OpenCamera from "./app/screens/OpenCamera";
import EditProfile from "./app/screens/EditProfile";
import Detail from "./app/screens/Detail";
import Splashscreen from "./app/screens/Splashscreen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon name="rocket" size={30} color="#900" />;


function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel:false,
      tabBarStyle: {
        backgroundColor: '#0e1d3a',
        borderTopWidth: 0,
    },
  })}>
      <Tab.Screen name="Home" component={Home}  options={{
                    tabBarIcon: ({size, color}) => (<Icon name="home" color={color} size={size} />)
                }}/>
      <Tab.Screen name="OpenCamera" component={OpenCamera}  options={{
                    tabBarIcon: ({size, color}) => (<Icon name="people" color={color} size={size} />)
                }}/>
    </Tab.Navigator>
  );
}
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={({ route }) => ({
      headerShown: false,
  })}>

      <Stack.Screen name="Splashscreen" component={Splashscreen} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
