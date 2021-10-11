import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const OtpScreen = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#52be74'}}>
        <View style={styles.header}>
          <Text style={styles.header_Text}>Log into Saavn</Text>
        </View>

        <View style={styles.container1}>
          <Text style={styles.container1_Text}>Enter your code</Text>
        </View>

        <View style={styles.container2}>
          <TextInput
            style={styles.container2_TextInput}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.container2_TextInput}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.container2_TextInput}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.container2_TextInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>

        <View style={styles.container3}>
          <TouchableOpacity style={styles.container3_TouchableOpacity}>
            <Text style={styles.container3_TouchableOpacity_Text}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52be74',
  },

  header_Text: {
    color: '#fff',
    fontWeight: 'bold',
  },

  container1: {
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container1_Text: {
    fontSize: 20,
    color: '#808080',
  },

  container2: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'center',
  },

  container2_TextInput: {
    width: 45,
    height: 45,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#a6a6a6',
    borderRadius: 5,
    marginHorizontal: 10,
  },

  container3: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  container3_TouchableOpacity: {
    width: windowWidth - 100,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#52be74',
  },

  container3_TouchableOpacity_Text: {
    color: '#52be74',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default OtpScreen;
