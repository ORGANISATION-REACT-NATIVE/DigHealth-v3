import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PrincipalScreen from '../Screens/PrincipalScreen'
import LoginScreen from '../Screens/LoginScreen'

const tabs = createStackNavigator()

export default function Root() {
  return (
    <tabs.Navigator>
        <tabs.Screen name="Principal" component={PrincipalScreen} options={{headerShown: false}} />
        <tabs.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
    </tabs.Navigator>
  )
}
