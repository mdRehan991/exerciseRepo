import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CustomButton = props => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={props.buttonEvent}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
  },

  touchableOpacity: {
    width: windowWidth - 60,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
  },
});

export default CustomButton;
