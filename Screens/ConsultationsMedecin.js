import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Divider, Button } from 'react-native-paper';

const ConsultationsMedecin = ({ navigation }) => {
  const consultations = [
    {
      id: '1',
      patient: 'John Doe',
      date: '2022-03-23 14:30',
      motif: 'Fever',
      status: 'Pending',
    },
    {
      id: '2',
      patient: 'Jane Doe',
      date: '2022-03-24 11:00',
      motif: 'Back pain',
      status: 'Pending',
    },
    {
      id: '3',
      patient: 'Bob Smith',
      date: '2022-03-25 09:15',
      motif: 'Persistent cough',
      status: 'Finished',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.listContainer}>
        <List.Section>
          <List.Subheader>Consultation list</List.Subheader>
          {consultations.map((consultation) => (
            <List.Item
              key={consultation.id}
              title={consultation.patient}
              description={`Date : ${consultation.date} | Motif : ${consultation.motif} | Statut : ${consultation.status}`}
              left={(props) => <List.Icon {...props} icon="calendar" />}
              onPress={() => navigation.navigate('Consultation', { consultation })}
            />
          ))}
        </List.Section>
        <Divider />
        <View style={styles.buttonContainer}>
          <Button icon="plus" mode="contained" onPress={() => navigation.navigate('NouvelleConsultation')} style={{backgroundColor: "#07D1BF"}}>
            New consultation
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: '90%',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default ConsultationsMedecin;
