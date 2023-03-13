import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PrincipalScreen from '../Screens/PrincipalScreen'
import LoginScreen from '../Screens/LoginScreen'
import HomeScreen from '../Screens/HomeScreen'
import SignupScreen from '../Screens/SignupScreen'
import MapScreen from '../Screens/MapScreen'


const tabs = createStackNavigator()

export default function Root() {
  return (
    <tabs.Navigator>
        <tabs.Screen name="Principal" component={PrincipalScreen} options={{headerShown: false}} />
        <tabs.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <tabs.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <tabs.Screen name="Signup" component={SignupScreen} options={{headerShown: false}} />
        <tabs.Screen name='Map' component={MapScreen} options={{title: 'Search Hospital'}} />
    </tabs.Navigator>
  )
}
