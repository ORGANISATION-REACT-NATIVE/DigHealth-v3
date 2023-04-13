import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const AddPrescription = ({ onAdd }) => {
  const [medicament, setMedicament] = useState('');
  const [dosage, setDosage] = useState('');
  const [posologie, setPosologie] = useState('');

  const handleAdd = () => {
    if (medicament && dosage && posologie) {
      onAdd({ medicament, dosage, posologie });
      setMedicament('');
      setDosage('');
      setPosologie('');
    }
  };

  return (
    <View style={{ margin: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Add prescription</Text>
      <TextInput
        label="Médicament"
        value={medicament}
        onChangeText={(text) => setMedicament(text)}
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Dosage"
        value={dosage}
        onChangeText={(text) => setDosage(text)}
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Posologie"
        value={posologie}
        onChangeText={(text) => setPosologie(text)}
        style={{ marginBottom: 16 }}
      />
      <Button
        mode="contained"
        icon="plus"
        onPress={handleAdd}
        style={{ marginTop: 16, backgroundColor: '#07D1BF' }}
      >
        Add
      </Button>
    </View>
  );
};

export default AddPrescription;
