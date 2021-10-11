import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const ImageActivityIndicator = () => {
  const [loading, setLoading] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={{uri: 'https://wallpaperaccess.com/full/386167.jpg'}}
          onLoadEnd={() => setLoading(false)}
        />
        <ActivityIndicator
          style={styles.activityIndicatorz}
          size="large"
          animating={loading}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 300,
    height: 180,
  },

  activityIndicatorz: {
    width: 300,
    height: 180,
    position: 'absolute',
    transform: [{scale : 3}]
  },
});

export default ImageActivityIndicator;
