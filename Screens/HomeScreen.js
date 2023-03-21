import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { Button, Card, Title, Paragraph, Divider, Avatar } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <ImageBackground source={{ uri: 'https://picsum.photos/800/600' }} style={styles.image}>
        <Text style={styles.title}>Bienvenue sur DigHealth</Text>
        <Button mode="contained" style={styles.button}>
          Rechercher des hopitaux
        </Button>
      </ImageBackground>

      <View style={styles.section}>
        <Title style={styles.sectionTitle}>Fonctionnalités principales</Title>
        <View style={styles.featureRow}>
          <Card style={styles.featureCard}>
            <Card.Content>
              <Avatar.Icon size={60} icon="doctor" style={styles.featureIcon} />
              <Title>Professionnels de santé</Title>
              <Paragraph>
                Trouvez et contactez des professionnels de santé pour prendre rendez-vous ou obtenir des conseils.
              </Paragraph>
            </Card.Content>
          </Card>
          <Card style={styles.featureCard}>
            <Card.Content>
              <Avatar.Icon size={60} icon="heart-pulse" style={styles.featureIcon} />
              <Title>Suivi de la condition physique</Title>
              <Paragraph>
                Suivez vos progrès en matière de condition physique, enregistrez vos activités physiques et suivez vos objectifs de remise en forme.
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
      </View>

      <View style={styles.section}>
        <Title style={styles.sectionTitle}>Nos Services</Title>
        <Card style={styles.serviceCard}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700/400' }} />
          <Card.Content>
            <Title>Consultations à distance</Title>
            <Paragraph>
              Consultez un professionnel de santé à distance, par vidéoconférence ou par téléphone, pour des conseils ou un suivi médical.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.serviceCard}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700/400' }} />
          <Card.Content>
            <Title>Pharmacie en ligne</Title>
            <Paragraph>
              Commandez vos médicaments en ligne et faites-vous livrer chez vous en toute sécurité.
            </Paragraph>
          </Card.Content>
        </Card>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.section}>
      <Title style={styles.sectionTitle}>Notre Équipe</Title>
        <View style={styles.memberRow}>
          <Avatar.Image size={60} source={{ uri: 'https://picsum.photos/80' }} style={styles.memberAvatar} />
          <View>
            <Title>John Doe</Title>
            <Paragraph>Développeur Full-stack</Paragraph>
          </View>
        </View>
        <View style={styles.memberRow}>
          <Avatar.Image size={60} source={{ uri: 'https://picsum.photos/81' }} style={styles.memberAvatar} />
          <View>
            <Title>Jane Smith</Title>
            <Paragraph>Designer UX/UI</Paragraph>
            </View>
      </View>
    <View style={styles.memberRow}>
      <Avatar.Image size={60} source={{ uri: 'https://picsum.photos/82' }} style={styles.memberAvatar} />
      <View>
        <Title>Bob Johnson</Title>
        <Paragraph>Expert en santé numérique</Paragraph>
      </View>
    </View>
  </View>

  <Divider style={styles.divider} />

  <View style={styles.section}>
    <Title style={styles.sectionTitle}>Contactez-nous</Title>
    <Paragraph>Pour toute question ou demande d'assistance, n'hésitez pas à nous contacter.</Paragraph>
    <Button icon="email" mode="contained" style={styles.contactButton}>
      Envoyer un e-mail
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
    memberRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    memberAvatar: {
      marginRight: 10,
    },
    contactButton: {
      marginVertical: 10,
      backgroundColor: '#3f51b5',
    },
});