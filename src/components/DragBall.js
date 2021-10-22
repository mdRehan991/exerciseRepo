import React, {useRef} from 'react';
import {
  SafeAreaView,
  Animated,
  Text,
  View,
  ImageBackground,
  Dimensions,
  StyleSheet
} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;

const DragBall = () => {
  const fade = useRef(
    new Animated.ValueXY({x: windowWidth - 110, y: 70}),
  ).current;
  const onPanGestureEvent = Animated.event(
    [{nativeEvent: {x: fade.x, y: fade.y}}],
    {
      useNativeDriver: true,
    },
  );

  return (
    <SafeAreaView style={styles.safeView}>
      <ImageBackground
        source={require('../assets/wallz1.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>
          Drag the Moon {'\n'} wherever you want !
        </Text>
        <PanGestureHandler onGestureEvent={onPanGestureEvent}>
          <Animated.View>
            <Animated.View
              style={[
                styles.animView,
                {
                  transform: [
                    {
                      translateX: fade.x,
                    },
                    {
                      translateY: fade.y,
                    },
                  ],
                },
              ]}>
              <View style={[styles.commonViewProps, styles.view1]}>
                <View style={[styles.commonViewProps, styles.view2]}>
                  <View style={[styles.commonViewProps, styles.view3]}></View>
                </View>
              </View>
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    fontSize: 35,
    fontWeight: '100',
    color: 'white',
    position: 'absolute',
    bottom: 0,
  },
  animView: {
    width: 60,
    height: 60,
    backgroundColor: '#262626',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonViewProps: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  view1: {
    width: 45,
    height: 45,
    backgroundColor: '#4d4d4d',
  },
  view2: {
    width: 35,
    height: 35,
    backgroundColor: '#808080',
  },
  view3: {
    width: 25,
    height: 25,
    backgroundColor: '#fff',
  },
});

export default DragBall;
