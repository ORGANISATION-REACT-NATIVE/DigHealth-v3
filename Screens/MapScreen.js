import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const navigation = useNavigation();
  const [markers, setMarkers] = useState([
    { latlng: { latitude: 4.0469, longitude: 9.7081 }, title: 'Hopital 1' },
    { latlng: { latitude: 4.0624, longitude: 9.7111 }, title: 'Hopital 2' },
    { latlng: { latitude: 4.0586, longitude: 9.7086 }, title: 'Hopital 3' },
  ]);

  const handleMarkerPress = (marker) => {
    navigation.navigate('Question', { title: marker.title });
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 4.0469,
        longitude: 9.7081,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.latlng}
          title={marker.title}
          onPress={() => handleMarkerPress(marker)}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;
