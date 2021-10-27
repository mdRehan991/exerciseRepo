import React, {useState} from 'react';
import {Image, TextInput, View, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const CustomInputBox = props => {
  const [focus, setFocus] = useState(false);

  const inputChange = (val, id) => {
    props.recieveData(val, id);
  }

  return (
    <View style={[styles.container, focus ? styles.containerFocus : null]}>
      <Image
        style={[styles.image, focus ? styles.imageFocus : null]}
        source={props.data.path}
      />
      <TextInput
        style={[styles.input, focus ? styles.inputFocus : null]}
        maxLength={props.data.length}
        placeholder={props.data.text}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        autoFocus={props.data.focusVal}
        onChangeText={(val) => inputChange(val, props.data.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width - 100,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  containerFocus: {
    borderWidth: 1.2,
    borderColor: '#3381ff',
  },
  image: {
    width: 20,
    height: 20,
    tintColor: '#8c8c8c',
    marginRight: 10,
  },
  imageFocus: {
    tintColor: '#0d57cc',
  },
  input: {
    width: width - 180,
    height: 58,
    fontSize: 14,
    fontWeight: '700',
    color: '#8c8c8c',
  },
  inputFocus: {
    color: '#0d57cc',
  },
});

export default CustomInputBox;
