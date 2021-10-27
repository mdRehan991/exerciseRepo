import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import {Alert, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  const alertTest = navigation => {
    Alert.alert('Watchout !', 'Do you want to Logout!', [
      {
        text: 'No',
        style: 'cancel',
      },

      {
        text: 'Yes',
        onPress: async () => navigation.push('SignUp'),
        style: 'destructive',
      },
    ]);
  };

  const func = navigation => {
    const clearAll = async () => {
      try {
        await AsyncStorage.clear();
      } catch (e) {
      }
    };
    clearAll();
    alertTest(navigation);
  };

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={({navigation}) => ({
              headerBackVisible: false,
              headerRight: () => (
                <TouchableOpacity onPress={() => func(navigation)}>
                  <Image
                    style={styles.exitButton}
                    source={require('../assets/exit.png')}
                  />
                </TouchableOpacity>
              ),
            })}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  exitButton: {
    width: 15,
    height: 15,
  },
});

export default StackNavigator;
