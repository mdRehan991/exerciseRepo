import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window');

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@keyData');
        setState(jsonValue != null ? JSON.parse(jsonValue) : null);
      } catch (e) {
        console.log(e);
      }
    };
    if (state) {
      getData();
    }
  }, [state]);

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/person.png')}
          />
        </View>
        <Text style={styles.text}>
          Username: {state ? state.username : null}
        </Text>
        <Text style={styles.text}>Email: {state ? state.email : null}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width - 60,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe6e6',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 20,
    color: '#ff6666',
    marginVertical: 10,
  },
});

export default Home;
