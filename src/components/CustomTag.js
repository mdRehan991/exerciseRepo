import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomTag = props => {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.touchableOpacity}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 10,
  },

  touchableOpacity: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 12,
    marginHorizontal: 20,
  },
});

export default CustomTag;
