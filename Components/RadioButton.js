import React, {useState} from 'react'
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native'

export default function RadioButton() {

    const [isDoctor, setIsDoctor] = useState(false);
  const [isPatient, setIsPatient] = useState(false);

  const handleIsDoctorChange = () => {
    setIsDoctor(true);
    setIsPatient(false);
  };

  const handleIsPatientChange = () => {
    setIsDoctor(false);
    setIsPatient(true);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Are you a doctor or a patient?</Text>
      <View style={styles.radioButtonsContainer}>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="doctor"
            status={isDoctor ? 'checked' : 'unchecked'}
            onPress={handleIsDoctorChange}
          />
          <Text style={styles.radioButtonLabel}>Doctor</Text>
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="patient"
            status={isPatient ? 'checked' : 'unchecked'}
            onPress={handleIsPatientChange}
          />
          <Text style={styles.radioButtonLabel}>Patient</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        marginBottom: 10
      },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
      },
      radio: {
        flexDirection: 'row',
        alignItems: 'center'
      }
})
