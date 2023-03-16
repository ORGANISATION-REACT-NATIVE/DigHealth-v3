import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DigHealth</Text>
      <View style={styles.profile}>
        {/* Afficher les informations du profil ici */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a2a3a',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
