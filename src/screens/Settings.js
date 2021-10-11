import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

const Settings = ({navigation}) => {
  const func = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'steelblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: '300',
      },
    });
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Settings Screen !</Text>
        <CustomButton title="Click to change Header Style" buttonEvent={func} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    marginBottom: 20,
  },
})

export default Settings;
