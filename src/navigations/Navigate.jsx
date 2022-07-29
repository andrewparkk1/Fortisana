import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ResourcesScreen from '../screens/ResourcesScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Resources" component={ResourcesScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}