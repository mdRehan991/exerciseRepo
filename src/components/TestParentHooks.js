import React, {useState} from 'react';
import {Button, View} from 'react-native';
import TestChildHooks from './TestChildHooks';

const TestParentHooks = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <TestChildHooks count={count} />
      <Button title="Press Me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default TestParentHooks;
