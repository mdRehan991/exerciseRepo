import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const HexToRGBConvertor = () => {
  const [hexCode, setHexCode] = useState('#ffffff');
  const [rgbCode, setRGBCode] = useState('rgb(255, 255, 255)');
  const regexCheck1 = /^[#][0-9 a b c d e f]{6}$/;
  const regexCheck2 = /^[#][0-9 a b c d e f]{3}$/;

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.header_Text}>Hex to RGB Convertor</Text>
      </View>

      <View style={styles.container1}>
        <TextInput
          style={styles.container1_TextInput}
          placeholder="Enter a hex code"
          onChangeText={text => setHexCode(text)}
        />

        <TouchableOpacity style={styles.container1_TouchableOpacity}>
          <Text
            style={styles.container1_TouchableOpacity_Text}
            onPress={() => {
              let hexArray = hexCode.split('');

              if (regexCheck1.test(hexCode) || regexCheck2.test(hexCode)) {
                hexArray = hexArray.map(item => {
                  switch (item) {
                    case 'a':
                      item = '10';
                      break;
                    case 'b':
                      item = '11';
                      break;
                    case 'c':
                      item = '12';
                      break;
                    case 'd':
                      item = '13';
                      break;
                    case 'e':
                      item = '14';
                      break;
                    case 'f':
                      item = '15';
                      break;
                  }

                  if (item !== '#') item = parseInt(item);

                  return item;
                });
              }

              if (regexCheck1.test(hexCode) == true) {
                setRGBCode(
                  `rgb(${hexArray[1] * 16 + hexArray[2]}, ${
                    hexArray[3] * 16 + hexArray[4]
                  }, ${hexArray[5] * 16 + hexArray[6]})`,
                );
              } else if (regexCheck2.test(hexCode)) {
                setRGBCode(
                  `rgb(${hexArray[1] * 16 + hexArray[1]}, ${
                    hexArray[2] * 16 + hexArray[2]
                  }, ${hexArray[3] * 16 + hexArray[3]})`,
                );
              } else {
                setRGBCode('Invalid HexCode');
              }
            }}>
            Ok
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <Text style={styles.container2_Text}>{rgbCode}</Text>
      </View>

      <View style={styles.container3}>
        <Text style={styles.container3_Text}>Selected Color :</Text>
        <View
          style={[styles.container3_View, {backgroundColor: rgbCode}]}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52be74',
  },
  header_Text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  container1: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1_TextInput: {
    width: 200,
    height: 45,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#a6a6a6',
    borderRadius: 5,
  },
  container1_TouchableOpacity: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a6a6a6',
    borderRadius: 5,
  },
  container1_TouchableOpacity_Text: {
    color: '#a6a6a6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container2: {
    height: 60,
    alignItems: 'center',
  },
  container2_Text: {
    fontSize: 18,
  },
  container3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3_Text: {
    fontSize: 18,
    marginBottom: 10,
  },
  container3_View: {
    width: 180,
    height: 280,
    borderWidth: 0.2,
    borderColor: '#a6a6a6',
    borderRadius: 5,
  },
});

export default HexToRGBConvertor;
