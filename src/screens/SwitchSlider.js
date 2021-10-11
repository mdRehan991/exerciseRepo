import React, {useState} from 'react';
import {SafeAreaView, View, Text, Switch} from 'react-native';
import Slider from '@ptomasroos/react-native-multi-slider';

const SwitchSlider = () => {
  const [switchVal, setSwitchVal] = useState(false);
  const [sliderVal, setSliderVal] = useState(0);

  return (
    <SafeAreaView>
      <View
        style={{height: 600, justifyContent: 'center', alignItems: 'center'}}>
        <Switch
          value={switchVal}
          onValueChange={val => setSwitchVal(val)}
          // thumbColor="#f2f2f2"
          // trackColor={{false: 'red', true: 'steelblue'}}
        />
        {switchVal ? (
          <View>
            <Slider
              min={0}
              max={100}
              onValuesChange={val => setSliderVal(val)}
            />
            <Text>Slider value : {sliderVal}</Text>
          </View>
        ) : null
    }
      </View>
    </SafeAreaView>
  );
};

export default SwitchSlider;
