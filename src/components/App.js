import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import DaftarGunung from './screens/GunungListScreen';
import GunungDetail from './screens/GunungDetailScreen';
import JalurPendakian from './screens/JalurPendakian';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DaftarGunung" component={DaftarGunung} />
        <Stack.Screen name="GunungDetail" component={GunungDetail} />
        <Stack.Screen name="JalurPendakian" component={JalurPendakian} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;