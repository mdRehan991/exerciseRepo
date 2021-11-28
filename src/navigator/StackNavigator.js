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
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: '600',
          },
          headerTintColor: '#808080',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Follower',
          }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            title: 'Edit Profile',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
