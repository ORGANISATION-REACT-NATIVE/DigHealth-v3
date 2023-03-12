import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

const HospitalsScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [specialty, setSpecialty] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      (async () => {
        let { latitude, longitude } = location.coords;
        const API_KEY = 'YOUR_API_KEY_HERE';
        let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=10000&type=hospital&key=${API_KEY}`;
        if (specialty) {
          url += `&keyword=${specialty}`;
        }
        try {
          const response = await fetch(url);
          const json = await response.json();
          setHospitals(json.results);
        } catch (error) {
          Alert.alert('Error fetching hospitals', error.message);
        }
      })();
    }
  }, [location, specialty]);

  const handleSpecialtyChange = (value) => {
    setSpecialty(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hospitals Near You:</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filter by Specialty:</Text>
        <TextInput
          style={styles.filterInput}
          onChangeText={handleSpecialtyChange}
          value={specialty}
          placeholder="e.g. cardiology, dermatology"
        />
      </View>
      {errorMsg ? (
        <Text style={styles.errorMsg}>{errorMsg}</Text>
      ) : (
        <MapView
          style={styles.map}
          region={{
            latitude: location?.coords.latitude ?? 0,
            longitude: location?.coords.longitude ?? 0,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
          }}
        >
          {hospitals.map((hospital) => (
            <Marker
              key={hospital.place_id}
              coordinate={{
                latitude: hospital.geometry.location.lat,
                longitude: hospital.geometry.location.lng,
              }}
              title={hospital.name}
              description={hospital.vicinity}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

alignItems: 'center',
backgroundColor: '#fff',
},
title: {
fontSize: 20,
fontWeight: 'bold',
marginTop: 20,
},
filterContainer: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 20,
marginBottom: 10,
},
filterLabel: {
fontSize: 16,
marginRight: 10,
},
filterInput: {
borderWidth: 1,
borderColor: '#ccc',
padding: 5,
borderRadius: 5,
flex: 1,
},
map: {
width: '100%',
height: '80%',
marginTop: 10,
},
errorMsg: {
fontSize: 16,
color: 'red',
marginTop: 20,
},
});

export default HospitalsScreen;