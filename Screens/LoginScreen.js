import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../Firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Sign In!');
        const user = userCredential.user;
        console.log(user);
        if (userType == 'patient'){
          console.log('Patient')
          navigation.navigate('Home')
        } else{
          console.log('Doctor')
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DigHealth</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.radioButtonsContainer}>
        <TouchableOpacity style={styles.radioButton} onPress={() => setUserType('patient')}>
          <Image source={{uri: 'https://th.bing.com/th/id/OIP.GUMg6Hb0K1SEO-gUCkwhpgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5'}} style={{width: 125, height: 130, borderRadius: 10, marginTop: 0, paddingTop: 0}} />
          <Text style={styles.radioButtonText}>Patient</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.radioButton} onPress={() => setUserType('docteur')}>
          <Image source={{uri: 'https://th.bing.com/th/id/OIP.3AChV9qTonQSmD2lSTezSgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5'}} style={{width: 125, height: 130, borderRadius: 10, marginTop: 0, paddingTop: 0}} />
          <Text style={styles.radioButtonText}>Docteur</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignupBtn} onPress={handleSignup}>
        <Text style={styles.SignupText}>SIGNUP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#007aff',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50,
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
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: 'green',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
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
    width: '80%',
    backgroundColor: '#007aff',
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
  loginText: {
    color: 'white',
  },
  SignupText:{
    color: 'white',
  },
  radioButtonsContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 20,
  },
  radioButton: {
    height: 30,
    width: 100,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: '#003f5c',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  radioButtonText: {
    color: '#003f5c',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
