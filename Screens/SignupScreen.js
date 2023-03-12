import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('USA');

  const handleSignUp = () => {
    // handle sign up logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={country}
          onValueChange={setCountry}
          style={styles.picker}
        >
          <Picker.Item label="USA" value="USA" />
          <Picker.Item label="Canada" value="Canada" />
          <Picker.Item label="Mexico" value="Mexico" />
          <Picker.Item label="France" value="France" />
          <Picker.Item label="Germany" value="Germany" />
          <Picker.Item label="Spain" value="Spain" />
        </Picker>
      </View>
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    height: 40,
  },
});
