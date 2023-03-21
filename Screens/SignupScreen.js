import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../Firebase';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [userType, setUserType] = useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleRegister = () => {
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Confirmed Password: ${confirmPassword}`);
    console.log(`Country: ${country}`);
    console.log(`Phone: ${phone}`);
    console.log(`User Type: ${userType}`);

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('User Created!');
      const user = userCredential.user;
      console.log(user);
      navigation.navigate('Login');
    })
    .catch((error) => {
      console.log(error.message);
      Alert.alert('Error',error.message);
    })
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGNUP</Text>
      <Text style={{paddingVertical: 20}}>To enter to DigHealth signup please</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={(text) => setPhone(text)}
        value={phone}
      />
      <Picker
        style={styles.input}
        selectedValue={country}
        onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
      >
        <Picker.Item label="Select your country" value="" />
        <Picker.Item label='Cameroon' value="Cameroon" />
        <Picker.Item label="USA" value="USA" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="Mexico" value="Mexico" />
        <Picker.Item label="France" value="France" />
        <Picker.Item label="England" value="England" />
      </Picker>
      <View style={styles.radioButtons}>
        <Text style={styles.radioText}>I am a:</Text>
        <View style={styles.radioButton}>
          <Text style={styles.radioLabel}>Patient</Text>
          <RadioButton
            value="patient"
            status={userType === 'patient' ? 'checked' : 'unchecked'}
            onPress={() => setUserType('patient')}
          />
        </View>
        <View style={styles.radioButton}>
          <Text style={styles.radioLabel}>Doctor</Text>
          <RadioButton
            value="doctor"
            status={userType === 'doctor' ? 'checked' : 'unchecked'}
            onPress={() => setUserType('doctor')}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.SignupBtn} onPress={handleRegister}>
        <Text style={styles.SignupText}>SIGNUP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignupBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.SignupText}>LOGIN</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    height:60,
    marginBottom: 20,
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
  radioButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  radioText: {
    fontSize: 16,
    marginRight: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  radioLabel: {
    marginRight: 5,
  },
  SignupBtn:{
    width: '80%',
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
  SignupText:{
    color: 'white',
  }
});

export default SignupScreen
