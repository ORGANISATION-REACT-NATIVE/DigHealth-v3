import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>DigHealth</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
          <AntDesign name="logout" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Welcome to my app! Here you can find all the information you need about...</Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageBox}>
          <Image source={require('../assets/icon.png')} style={styles.image} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageBox}>
          <Image source={require('../assets/icon.png')} style={styles.image} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 2</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('Map')}>
        <FontAwesome name="map-marker" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 10,
  },
  description: {
    padding: 20,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  imageBox: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#007AFF',
    borderRadius: 90,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
