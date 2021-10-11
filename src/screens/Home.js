import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

const Home = ({navigation, route}) => {
  const func = () => {
    navigation.navigate('Post Screen', {
      headerTitle: 'Your PostMan !',
    });
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Home Screen !</Text>
        <Text style={styles.text}>Your Post:</Text>
        <Text style={styles.textColor}>{route.params?.postItem}</Text>
        <CustomButton title="Go to Post Screen" buttonEvent={func} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    text: {
      fontSize: 40,
      marginBottom: 20,
    },
    textColor : {
        color : "#ff7733",
        fontSize: 30,
        marginBottom: 10,
    }
})

export default Home;
