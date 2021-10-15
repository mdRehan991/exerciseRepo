import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CopyContent from '../screens/CopyContent';
import PasteContent from '../screens/PasteContent';

import {BackHandler, Alert} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  //BackHandler....

  React.useEffect(() => {
    const backAction = () => {
      Alert.alert('Wait, What are doing ?', 'Do you really wanna quit !', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },

        {
          text: 'Exit',
          onPress: () => BackHandler.exitApp(),
          style: 'destructive',
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'CopyContent') {
              iconName = focused ? 'copy' : 'copy-outline';
            } else if (route.name === 'PasteContent') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'coral',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="CopyContent" component={CopyContent} />
        <Tab.Screen name="PasteContent" component={PasteContent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
