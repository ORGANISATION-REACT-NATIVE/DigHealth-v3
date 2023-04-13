import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';

const NouvelleConsultation = ({navigation }) => {
  const [motif, setMotif] = useState('');
  const [commentaires, setCommentaires] = useState('');
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);

  const handlePress = () => {
    // Code pour enregistrer la nouvelle consultation
    setVisibleSnackbar(true);
    setMotif('');
    setCommentaires('');
    navigation.navigate('ConsultationsMedecin');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Motif"
        value={motif}
        onChangeText={setMotif}
        style={styles.textInput}
      />
      <TextInput
        label="Commentaires"
        value={commentaires}
        onChangeText={setCommentaires}
        style={styles.textInput}
        multiline
      />
      <Button mode="contained" onPress={handlePress} style={styles.button}>
        Add
      </Button>
      <Snackbar
        visible={visibleSnackbar}
        onDismiss={() => setVisibleSnackbar(false)}
        duration={3000}
      >
        Consultation successfully added!
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '90%',
    marginBottom: 20
  },
  button: {
    width: '90%',
    marginTop: 20,
    backgroundColor: '#07D1BF'
  },
});

export default NouvelleConsultation;
