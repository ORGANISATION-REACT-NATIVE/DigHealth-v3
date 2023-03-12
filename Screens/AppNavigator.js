import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HospitalsScreen from './HospitalsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Hospitals" component={HospitalsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
