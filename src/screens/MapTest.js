import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker, Callout, Circle} from 'react-native-maps';
import {Data} from '../components/Data';

const {width, height} = Dimensions.get('window');

const MapTest = () => {
  const [pos, setPos] = useState({
    latitude: 28.596352132796105,
    longitude: 77.45462918465922,
  });

  return (
    <View>
      <MapView
        style={styles.mapContainer}
        initialRegion={{
          latitude: 28.496352132796105,
          longitude: 77.43462918465922,
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
        fillColor= "rgba(166, 166, 166, 0.4)"
        strokeWidth={0.5}
        />
        <View>
        {Data.map((item, i) => (
          <Marker coordinate={item.position} pinColor={item.color} key={i}>
            <Callout>
              <Text>{item.text}</Text>
            </Callout>
          </Marker>
        ))}
        </View>
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

export default MapTest;
