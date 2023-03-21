import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, FAB } from 'react-native-paper';

const ButtonFlotting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Votre contenu ici */}
      </View>
      <FAB
        style={styles.fab}
        icon="map-marker-radius"
        onPress={() => console.log('Ajouter un élément')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    bottom: 0,
    padding: 16,
    alignSelf: 'center',
    backgroundColor: '#0295CE',
  },
});

export default ButtonFlotting 
