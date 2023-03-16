import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function AppointmentCard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontStyle: 'normal'}}>Appointment Today : </Text>
        <View style={styles.pannel}>
            <Ionicons name="ios-person-circle" size={50} color="black" style={{paddingHorizontal: 2}}/>
            <View style={styles.textDescription}>
                <Text style={{fontSize: 25}}>Lorem</Text>
                <Text>Lorem ipsum dolor irt djs ea</Text>
                <Text>12:10:20</Text>
            </View>
            <Ionicons name="close-circle-sharp" size={24} color="red" style={{position: 'absolute', right:0, padding: 4}} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        width: '100%',
    },
    pannel:{
        backgroundColor:'skyblue',
        borderColor: '#ccc',
        borderRadius:10,
        padding: 23,
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 5,
    },
    textDescription:{

    },
    pannelAdd:{
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 0,
        paddingLeft: 0,
    },
})
