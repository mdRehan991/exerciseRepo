import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const TestChildHooks = props => {
  return (
    <SafeAreaView>
      <View>
        <Text>Counter : {props.count}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TestChildHooks;
