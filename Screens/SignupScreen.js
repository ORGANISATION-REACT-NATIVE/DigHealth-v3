import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [nationality, setNationality] = useState('');
  const [role, setRole] = useState('');

  const handleSignup = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { uid } = userCredential.user;
        firestore.collection('users').doc(uid).set({
          email,
          password,
          name,
          surname,
          phone,
          nationality,
          role,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Surname"
        value={surname}
        onChangeText={(text) => setSurname(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Nationality"
        value={nationality}
        onChangeText={(text) => setNationality(text)}
        style={styles.input}
      />
      <TouchableOpacity
        style={[styles.button, role === 'doctor' && styles.selectedButton]}
        onPress={() => setRole('doctor')}
      >
        <Text style={styles.buttonText}>Doctor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, role === 'patient' && styles.selectedButton]}
        onPress={() => setRole('patient')}
      >
        <Text style={styles.buttonText}>Patient</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    },
    selectedButton: {
    backgroundColor: '#3E8E41',
    },
    buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    },
    });
    
    export default SignupScreen;
    
    
    
    
