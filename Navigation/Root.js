import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PrincipalScreen from '../Screens/PrincipalScreen'
import LoginScreen from '../Screens/LoginScreen'
import HomeScreen from '../Screens/HomeScreen'
import SignupScreen from '../Screens/SignupScreen'
import MapScreen from '../Screens/MapScreen'
import QuestionScreen from '../Screens/QuestionScreen'
import SuccessScreen from '../Screens/SuccessScreen'
import DoctorScreen from '../Screens/DoctorScreen'
import InfoAccountScreen from '../Screens/InfoAccountScreen'
import ConsultationsMedecin from '../Screens/ConsultationsMedecin'
import NouvelleConsultation from '../Screens/NouvelleConsultation'
import Prescriptions from '../Screens/PrescriptionsList'
import AddPrescription from '../Screens/AddPrescription'
import CalendrierScreen from '../Screens/CalendrierScreen'


const tabs = createStackNavigator()

export default function Root() {
  return (
    <tabs.Navigator>
        <tabs.Screen name="Principal" component={PrincipalScreen} options={{headerShown: false}} />
        <tabs.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <tabs.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <tabs.Screen name="Signup" component={SignupScreen} options={{headerShown: false}} />
        <tabs.Screen name='Map' component={MapScreen} options={{title: 'Search Hospital'}} />
        <tabs.Screen name='Question' component={QuestionScreen} options={{title: 'Symptom selection'}} />
        <tabs.Screen name='Success' component={SuccessScreen} options={{title: 'Success', headerShown: false}} />
        <tabs.Screen name='DoctorHome' component={DoctorScreen} options={{headerShown: false}} />
        <tabs.Screen name='InfoAccount' component={InfoAccountScreen} options={{title: "Account"}} />
        <tabs.Screen name='ConsultationsMedecin' component={ConsultationsMedecin} options={{title: "Consultation list"}} />
        <tabs.Screen name='NouvelleConsultation' component={NouvelleConsultation} options={{title: "Add Consultation"}} />
        <tabs.Screen name='Prescriptions' component={Prescriptions} options={{title: "Prescription list"}} />
        <tabs.Screen name='AddPrescription' component={AddPrescription} options={{title: "Add prescription"}} />
        <tabs.Screen name='CalendrierScreen' component={CalendrierScreen} options={{title: "Calendar"}} />
    </tabs.Navigator>
  )
}
