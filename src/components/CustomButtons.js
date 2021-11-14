import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({ val, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.button, val.style]} {...rest}>
      <Text style={styles.text}>{val.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: "#ff8080",
    marginBottom: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
});

export default CustomButton;
