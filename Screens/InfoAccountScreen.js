import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

const InfoAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account informations</Text>
      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={96}
          source={{
            uri: 'https://www.example.com/profile_image.jpg',
          }}
          style={{backgroundColor: '#007AFF'}}
        />
      </View>
      <Card style={styles.card}>
        <Card.Title title="Account type" />
        <Card.Content>
          <Text style={styles.infoText}>Patient</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Email" />
        <Card.Content>
          <Text style={styles.infoText}>ferdinand@gmail.com</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Password" />
        <Card.Content>
          <Text style={styles.infoText}>**********</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Phone" />
        <Card.Content>
          <Text style={styles.infoText}>+237 6 75 63 02 03</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Country" />
        <Card.Content>
          <Text style={styles.infoText}>Cameroon</Text>
        </Card.Content>
      </Card>
      <View style={styles.buttonContainer}>
        <Button mode="contained" style={{backgroundColor: '#007AFF'}} onPress={() => navigation.navigate('Login')}>
          Log Out
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default InfoAccountScreen 
