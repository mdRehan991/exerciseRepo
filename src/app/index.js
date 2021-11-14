import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButtons";
import Data from "../components/Data";

const App = () => {
  const [state, setState] = useState(Data);

  const focusFnx = (item, index) => {
    const title = item.title;
    const arr = [...state];
    arr.splice(index, 1, {
      title,
      style: {
        borderColor: "#004d99",
        backgroundColor: "#3399ff",
        transform: [{ scale: 1.2 }],
      },
    });
    setState(arr);
  };

  const blurFnx = (item, index) => {
    const title = item.title;
    const arr = [...state];
    arr.splice(index, 1, { title, style: { borderColor: "#e60000" } });
    setState(arr);
  };

  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        {state.map((item, index) => (
          <CustomButton
            key={index}
            val={item}
            onFocus={() => focusFnx(item, index)}
            onBlur={() => blurFnx(item, index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default App;
