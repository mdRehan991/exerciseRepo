import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Post from './Post';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={Home} />
      <Stack.Screen
        name="Post Screen"
        component={Post}
        options={({route}) => ({title: route.params.headerTitle})}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
