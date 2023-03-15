import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

export default function SuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/undraw_Confirmed_re_sef7.png')} />
      <Text style={styles.title}>Information sent successfully!</Text>
      <Text style={styles.message}>We have received your information and will transmit it to the selected hospital.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Return to Home Page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo:{
    width: 300,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
