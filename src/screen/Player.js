import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, StatusBar} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

const Player = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar barStyle="light-content" backgroundColor="#212121"/>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Simple Video Player</Text>
      </View>
      <View style={styles.playerContainer}>
        <VideoPlayer
          seekColor="red"
          disableBack
          disableVolume
          source={{
            uri: 'https://sample-videos.com/video123/mp4/360/big_buck_bunny_360p_30mb.mp4',
          }}
        />
      </View>
      <View style={styles.metaContainer}>
        <Text style={styles.metaData}>Title : Big Buck Bunny</Text>
        <Text style={styles.metaData}>Directed by : Mr. Will Smith</Text>
        <Text style={styles.metaData}>Duration : 1 min.</Text>
        <Text style={styles.metaData}>Imdb rating : 8.9/10.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#212121',
  },
  textContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50,
    backgroundColor: '#404040',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    color: '#fff',
  },
  playerContainer: {
    width: '100%', 
    height: 300, 
    backgroundColor: 'white',
  },
  metaContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  metaData: {
    fontSize: 18,
    fontWeight: '300',
    color: '#fff',
    marginVertical: 5,
  },
});

export default Player;
