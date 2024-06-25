import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GunungListScreen from '../screens/GunungListScreen';
import GunungDetailScreen from '../screens/GunungDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Gunung List" component={GunungListScreen} />
      <Stack.Screen name="Gunung Detail" component={GunungDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
