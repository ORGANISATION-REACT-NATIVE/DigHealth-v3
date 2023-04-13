import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button, Divider, List } from 'react-native-paper';

const Prescriptions = ({ navigation }) => {
  const [prescriptions, setPrescriptions] = useState([
    { id: '1', medicament: 'Paracétamol', dosage: '500mg', posologie: '1 comprimé toutes les 6 heures' },
    { id: '2', medicament: 'Ibuprofène', dosage: '200mg', posologie: '1 comprimé toutes les 8 heures' },
  ]);

  return (
    <ScrollView>
      <View style={{ margin: 16 }}>
        <Text style={{ fontSize: 20, marginBottom: 16 }}>Prescriptions list</Text>
        {prescriptions.map((prescription) => (
          <View key={prescription.id}>
            <List.Item
              title={prescription.medicament}
              description={`Dosage : ${prescription.dosage}\nPosologie : ${prescription.posologie}`}
            />
            <Divider />
          </View>
        ))}
        <Button
          mode="contained"
          icon="plus"
          onPress={() => {
            navigation.navigate("AddPrescription")
          }}
          style={{ marginTop: 16 , backgroundColor: '#07D1BF'}}
        >
          Add prescription
        </Button>
      </View>
    </ScrollView>
  );
};

export default Prescriptions;
