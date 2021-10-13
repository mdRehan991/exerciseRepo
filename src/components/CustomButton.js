import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomButton = props => {
  return (
    <View>
      <TouchableOpacity style={styles.touchableOpacity}>
        <View style={styles.view}>
          <Ionicons name={props.iconName} size={20} color="#404040" />
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  touchableOpacity: {
    height: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
  },

  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: 11,
    marginLeft: 10,
  },
});

export default CustomButton;
