import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {Data} from '../components/Data';
import CustomInputBox from '../components/CustomInputBox';
import {customAlert} from '../components/customAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const SignUp = ({navigation}) => {

  React.useEffect( () => {
    const resetHome = async () => {
      const value = await AsyncStorage.getItem('@keyData');
      if(!!value){
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              { name: 'Home' },
            ],
          })
        );
      }
    }
    resetHome();
  }, [])


  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const recieveValue = (value, id) => {
    if (id === 1) {
      setUserData({
        ...userData,
        username: value,
      });
    } else if (id === 2) {
      setUserData({
        ...userData,
        email: value,
      });
    } else if (id === 3) {
      setUserData({
        ...userData,
        phone: value,
      });
    } else if (id === 4) {
      setUserData({
        ...userData,
        password: value,
      });
    } else if (id === 5) {
      setUserData({
        ...userData,
        confirmPassword: value,
      });
    }
  };

  const storeData = async value => {
    try {
      const flag = customAlert(userData);
      if (flag === true) {
        await AsyncStorage.setItem('@keyData', JSON.stringify(value));
        navigation.push('Home');
      }
    } catch (e) {
      //
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container1}>
        <Text style={styles.text1}>Let's Get Started!</Text>
        <Text style={styles.text2}>
          Create an account to Q Allure to get all features
        </Text>
        {Data.map((item, i) => (
          <CustomInputBox data={item} key={i} recieveData={recieveValue} />
        ))}
        <TouchableOpacity
          style={styles.button1}
          onPress={() => storeData(userData)}>
          <Text style={styles.text3}>CREATE</Text>
        </TouchableOpacity>
        <View style={styles.container2}>
          <Text>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.text4}>Login here</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.circle}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },
  container1: {
    width: width - 40,
    height: height - 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 40,
  },
  text1: {
    fontSize: 25,
    fontWeight: '800',
    marginTop: 50,
    marginBottom: 10,
  },
  text2: {
    fontSize: 13,
    fontWeight: '500',
    color: '#737373',
    marginBottom: 30,
  },
  button1: {
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d57cc',
    borderRadius: 50,
    marginVertical: 30,
  },
  text3: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  container2: {
    flexDirection: 'row',
    marginTop: 20,
  },
  text4: {
    fontWeight: '700',
    color: '#3381ff',
  },
  circle: {
    width: 400,
    height: 400,
    borderRadius: 200,
    position: 'absolute',
    bottom: -80,
    right: -260,
    zIndex: -1,
    backgroundColor: '#0d57cc',
  },
});

export default SignUp;
