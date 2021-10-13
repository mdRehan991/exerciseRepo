import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const MyCart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>My Cart Screen !</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

export default MyCart;
