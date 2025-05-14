import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ScreensScreen from '../screens/ScreensScreen';
import RoutesScreen from '../screens/RoutesScreen';
import LibraryScreen from '../screens/LibraryScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gray',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Home' }} 
      />
      <Tab.Screen 
        name="Screens" 
        component={ScreensScreen} 
        options={{ title: 'Telas' }} 
      />
      <Tab.Screen 
        name="Routes" 
        component={RoutesScreen} 
        options={{ title: 'Rotas' }} 
      />
      <Tab.Screen 
        name="Library" 
        component={LibraryScreen} 
        options={{ title: 'Biblioteca' }} 
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;