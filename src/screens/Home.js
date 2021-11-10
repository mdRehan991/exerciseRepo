import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import setupIfNecessary from '../components/setup';
import ImageColors from 'react-native-image-colors';

const {width} = Dimensions.get('window');

const togglePlayback = async (playbackState = State) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack == null) {
    // TODO: Perhaps present an error or restart the playlist?
  } else {
    if (playbackState !== State.Playing) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

const Home = () => {
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const [trackArtwork, setTrackArtwork] = useState();
  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist] = useState();

  const [currentColor, setCurrentColor] = useState();

  useEffect(() => {
    setupIfNecessary();
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (
      event.type === Event.PlaybackTrackChanged &&
      event.nextTrack !== undefined
    ) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {artwork, title, artist} = track || {};

      setTrackArtwork(artwork);
      setTrackTitle(title);
      setTrackArtist(artist);
      getColor(artwork);
    }
  });

  const getColor = async url => {
    const uri = url;
    const result = await ImageColors.getColors(uri, {
      fallback: '#212121',
      cache: true,
      key: url,
    });

    switch (result.platform) {
      case 'android':
        setCurrentColor(result.darkMuted);
        break;
      case 'ios':
        setCurrentColor(result.primary);
        break;
      default:
        throw new Error('Unexpected platform key');
    }
  };

  return (
    <SafeAreaView style={[styles.safeView, {backgroundColor: currentColor}]}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.containerMain}>
        <Image style={styles.artwork} source={{uri: trackArtwork}} />
        <Text style={styles.title}>{trackTitle}</Text>
        <Text style={styles.artist}>{trackArtist}</Text>
      </View>
      <View style={styles.containerMain}>
        <Slider
          style={styles.slider}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          thumbTintColor="#fff"
          minimumTrackTintColor="#fff"
          maximumTrackTintColor="#595959"
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabelText}>
            {new Date(progress.position * 1000).toISOString().substr(14, 5)}
          </Text>
          <Text style={styles.progressLabelText}>
            {new Date((progress.duration - progress.position) * 1000)
              .toISOString()
              .substr(14, 5)}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              TrackPlayer.skipToPrevious();
              getColor(trackArtwork);
            }}>
            <Image
              style={styles.iconPrevNext}
              source={require('../assets/icons/previous.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
            <Image
              style={styles.iconPlayPause}
              source={
                playbackState == State.Playing
                  ? require('../assets/icons/pause.png')
                  : require('../assets/icons/play.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              TrackPlayer.skipToNext();
              getColor(trackArtwork);
            }}>
            <Image
              style={styles.iconPrevNext}
              source={require('../assets/icons/next.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#212121',
  },
  containerMain: {
    alignItems: 'center',
  },
  artwork: {
    width: width - 60,
    height: width - 60,
    borderRadius: 25,
    borderWidth: 0.2,
    borderColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    color: '#fff',
    marginTop: 15,
    marginBottom: 8,
  },
  artist: {
    fontSize: 13,
    fontWeight: '200',
    color: '#fff',
  },
  slider: {
    width: width - 60,
    height: 40,
    marginTop: 100,
  },
  progressLabelContainer: {
    width: width - 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  progressLabelText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '200',
  },
  buttonContainer: {
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconPrevNext: {
    width: 25,
    height: 25,
  },
  iconPlayPause: {
    width: 43,
    height: 43,
  },
});

export default Home;
