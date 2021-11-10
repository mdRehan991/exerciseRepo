import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker, Callout, Circle} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

const {width, height} = Dimensions.get('window');

const Map = () => {
  const [pos, setPos] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location.latitude, location.longitude);
        setPos({
          latitude: location.latitude,
          longitude: location.longitude,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);

  return (
    <View>
      <MapView
        style={styles.mapContainer}
        showsUserLocation={true}
        followsUserLocation={true}
        region={{
          latitude: pos.latitude,
          longitude: pos.longitude,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}>
        <Marker
          coordinate={pos}
          pinColor="#ff0000"
          draggable={true}
          onDragStart={e => {}}
          onDragEnd={e => {
            setPos({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}>
          <Callout>
            <Text>My Location</Text>
          </Callout>
        </Marker>
        <Circle
          center={pos}
          radius={2100}
          fillColor="rgba(166, 166, 166, 0.4)"
          strokeWidth={0.5}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: width,
    height: height,
  },
});

export default Map;
