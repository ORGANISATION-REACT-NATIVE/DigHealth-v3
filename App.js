import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Root from './Navigation/Root';

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

