import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Edit from '../screens/Edit';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
