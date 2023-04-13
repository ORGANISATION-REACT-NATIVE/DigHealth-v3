import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { Button, Card, Title, Paragraph, Divider, Avatar } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' }} style={styles.image}>
        <Text style={styles.title}>Welcome to DigHealth</Text>
        <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Map')}>
        search for hospitals
        </Button>
      </ImageBackground>

      <View style={styles.section}>
        <Title style={styles.sectionTitle}>Main features</Title>
        <View style={styles.featureRow}>
          <Card style={styles.featureCard}>
            <Card.Content>
              <Avatar.Icon size={60} icon="doctor" style={styles.featureIcon} />
              <Title>Healthcare professionals</Title>
              <Paragraph>
              Find and contact healthcare professionals to make an appointment or get advice.
              </Paragraph>
            </Card.Content>
          </Card>
          <Card style={styles.featureCard}>
            <Card.Content>
              <Avatar.Icon size={60} icon="heart-pulse" style={styles.featureIcon} />
              <Title>Fitness tracking</Title>
              <Paragraph>
              Track your fitness progress, record your physical activities, and monitor your fitness goals.
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
      </View>

      <View style={styles.section}>
        <Title style={styles.sectionTitle}>Our Services</Title>
        <Card style={styles.serviceCard}>
          <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1616587894289-86480e533129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }} />
          <Card.Content>
            <Title>Remote consultations</Title>
            <Paragraph>
            Consult with a healthcare professional remotely, via video conference or telephone, for advice or medical follow-up.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.serviceCard}>
          <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' }} />
          <Card.Content>
            <Title>Online pharmacy</Title>
            <Paragraph>
            Order your medication online and have it safely delivered to your doorstep.
            </Paragraph>
          </Card.Content>
        </Card>
      </View>

  <Divider style={styles.divider} />

  <View style={styles.section}>
    <Title style={styles.sectionTitle}>Contact us</Title>
    <Button icon="email" mode="contained" style={styles.contactButton}>
      Send mail
    </Button>
  </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      paddingBottom: 20,
    },
    image: {
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#0295CE',
      borderRadius: 20,
      paddingHorizontal: 30,
      paddingVertical: 10,
    },
    section: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    featureRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    featureCard: {
      flex: 1,
      marginHorizontal: 5,
      marginBottom: 10,
    },
    featureIcon: {
      backgroundColor: '#f0f0f0',
      marginBottom: 10,
    },
    serviceCard: {
      marginBottom: 10,
    },
    divider: {
      marginVertical: 20,
      marginHorizontal: 50,
    },
    contactButton: {
      marginVertical: 10,
      backgroundColor: '#3f51b5',
    },
});