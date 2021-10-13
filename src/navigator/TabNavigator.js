import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import MyCart from '../screens/MyCart';
import Wishlist from '../screens/Wishlist';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Categories') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'MyCart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Wishlist') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'steelblue',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTitle: 'MEN CLOTHING',
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            title: 'Categories',
            headerTitle: 'CATEGORIES',
          }}
        />
        <Tab.Screen
          name="MyCart"
          component={MyCart}
          options={{
            title: 'My Cart',
            headerTitle: 'MY CART',
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            title: 'Wishlist',
            headerTitle: 'WISHLIST',
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            title: 'Account',
            headerTitle: 'ACCOUNT',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
