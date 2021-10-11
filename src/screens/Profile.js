import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

const Profile = ({navigation}) => {
  const func = () => {
    navigation.setOptions({
      title: 'Title Changed !',
    });
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Profile Screen !</Text>
        <CustomButton title="Click to change Header Title" buttonEvent={func} />
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

export default Profile;
