import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

export default function PrincipalScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image} >
      <View style={styles.logoContainer}>
        {/* Ajoutez votre logo ici */}
        <Text style={styles.title}>Welcome to DigHealth</Text>
        <Text style={styles.description}>You can find hospitals near you.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')} >Get Started</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingBottom: 40,
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 10,
    height: 60,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
});
