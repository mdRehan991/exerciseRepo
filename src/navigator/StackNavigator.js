import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import Home from '../screens/Home';
import Edit from '../screens/Edit';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            title: 'Employee list',
            headerStyle: {backgroundColor: '#ffc299'},
            headerTintColor: '#595959',
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Edit', {
                    id: '',
                    name: '',
                    designation: '',
                    salary: '',
                  })
                }>
                <Image
                  style={styles.closeButton}
                  source={require('../assets/plus11.png')}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={({navigation}) => ({
            title: 'Add Employee Info',
            headerStyle: {backgroundColor: '#ffc299'},
            headerTintColor: '#595959',
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
        <Stack.Screen
          name="Search"
          component={Search}
          options={({navigation}) => ({
            title: 'Search Engine',
            headerStyle: {backgroundColor: '#ffc299'},
            headerTintColor: '#595959',
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
    tintColor: '#4d4d4d',
  },
});

export default StackNavigator;
