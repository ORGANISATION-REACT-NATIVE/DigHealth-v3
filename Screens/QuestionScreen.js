import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const symptoms = [
    'Fever',
    'Cough',
    'Headache',
    'Muscle aches',
    'Nausea',
    'Diarrhea',
    'Drowsiness',
    'Vomiting',
    'Itching',
    'Sore throat',
    'Difficulty breathing',
    'Joint pain',
    'Skin rashes',
    'Flu',
    'Meningitis',
    'Lack of sleep',
    'Otitis externa',
    'Otitis interna',
    'Abdominal pain',
    'Other symptoms',
];

const QuestionScreen = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const toggleSymptom = symptom => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(item => item !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const renderSymptomButton = symptom => (
    <TouchableOpacity
      key={symptom}
      style={[
        styles.symptomButton,
        selectedSymptoms.includes(symptom) && styles.selectedSymptomButton
      ]}
      onPress={() => toggleSymptom(symptom)}
    >
      <Text style={styles.symptomButtonText}>{symptom}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What are your symptoms?</Text>
      <View style={styles.symptomsContainer}>
        {symptoms.map(renderSymptomButton)}
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Soumettre</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  symptomsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  symptomButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
    borderRadius: 10
  },
  selectedSymptomButton: {
    backgroundColor: '#0080ff',
    borderColor: '#0080ff'
  },
  symptomButtonText: {
    fontSize: 16
  },
  submitButton: {
    backgroundColor: '#0080ff',
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default QuestionScreen;
