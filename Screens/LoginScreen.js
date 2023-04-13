import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../Firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDoctor, setIsDoctor] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Sign In!');
        const user = userCredential.user;
        console.log(user);
        if(isDoctor) {
          console.log('Doctor')
          navigation.navigate('DoctorHome')
        } else{
          console.log('Patient')
          navigation.navigate('Home')
        }
      })
      .catch((error) => {
        console.log(error.message);
        Alert.alert("Error", error.message)
      })
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DIGHEALTH</Text>

      <View style={styles.radioButtonContainer}>
        <TouchableOpacity
          style={[styles.radioButton, isDoctor && styles.radioButtonSelected]}
          onPress={() => setIsDoctor(true)}
        >
          <Text style={styles.radioButtonText}>Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.radioButton, !isDoctor && styles.radioButtonSelected]}
          onPress={() => setIsDoctor(false)}
        >
          <Text style={styles.radioButtonText}>Patient</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={{marginTop: 30}}></View>

      <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
        <Text style={styles.LoginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignupBtn} onPress={handleSignup}>
        <Text style={styles.LoginText}>SIGNUP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0295CE',
    shadowColor: 'black'
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: '#0295CE',
  },
  radioButtonText: {
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    height:60,
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    height: 50,
    color: 'black',
    paddingVertical: 10,
  },
  btnLogin: {
    backgroundColor: '#07D1BF',
    width: '100%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  SignupBtn:{
    width: '100%',
    backgroundColor: '#0295CE',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  LoginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
