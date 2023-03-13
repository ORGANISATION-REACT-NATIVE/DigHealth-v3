import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default function MapScreen() {
    const douala = { latitude: 4.0528, longitude: 9.7679 };
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: douala.latitude,
            longitude: douala.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

