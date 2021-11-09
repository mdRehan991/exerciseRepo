import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import Home from '../screens/Home';
import Edit from '../screens/Edit';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Simple Note Taker',
            headerStyle: {backgroundColor: '#5fdac4'},
            headerTintColor: '#808080',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={({navigation}) => ({
            title: 'Add a new note',
            headerStyle: {backgroundColor: '#5fdac4'},
            headerTintColor: '#808080',
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image
                  style={styles.closeButton}
                  source={require('../assets/closeButton.png')}
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
  closeButton: {
    width: 30,
    height: 30,
  },
});

export default StackNavigator;
