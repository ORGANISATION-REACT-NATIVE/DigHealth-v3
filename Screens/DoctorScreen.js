import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, List, Divider } from 'react-native-paper';

const DoctorScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <Card>
          <Card.Title title="Welcome Doctor Smith" subtitle="Generalist medecin" left={(props) => <Avatar.Icon {...props} icon="account-circle" style={{backgroundColor: '#07D1BF'}}/>} />
          <Card.Content>
            <Paragraph>You have 5 scheduled consultations for today.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => navigation.navigate('ConsultationsMedecin')} style={{borderColor: "#07D1BF"}} textColor='#07D1BF'>See consultations</Button>
          </Card.Actions>
        </Card>
      </View>
      <View style={styles.buttonContainer}>
        <Button icon="calendar" mode="contained" onPress={() => navigation.navigate('CalendrierScreen')} style={{backgroundColor: "#07D1BF"}}>
          See calendar
        </Button>
        <Button icon="clipboard-text" mode="contained" onPress={() => navigation.navigate('Prescriptions')} style={{backgroundColor: "#07D1BF"}}>
          See prescriptions
        </Button>
      </View>
      <Divider />
      <View style={styles.listContainer}>
        <Title style={styles.listTitle}>Pending patient</Title>
        <List.Item
          title="John Doe"
          description="Reason for visit : Fever"
          left={(props) => <Avatar.Icon {...props} icon="account-circle" style={{backgroundColor: "#07D1BF"}} />}
          right={(props) => <Button {...props} mode="text" onPress={() => navigation.navigate('Consultation', { patient: 'John Doe' })} textColor='#07D1BF'>Start consultation</Button>}
        />
        <List.Item
          title="Jane Doe"
          description="Reason for visit : Back pain"
          left={(props) => <Avatar.Icon {...props} icon="account-circle" style={{backgroundColor: "#07D1BF"}} />}
          right={(props) => <Button {...props} mode="text" onPress={() => navigation.navigate('Consultation', { patient: 'Jane Doe' })} textColor='#07D1BF'>Start consultation</Button>}
        />
        <List.Item
          title="Jane Doe"
          description="Reason for visit : Back pain"
          left={(props) => <Avatar.Icon {...props} icon="account-circle" style={{backgroundColor: "#07D1BF"}} />}
          right={(props) => <Button {...props} mode="text" onPress={() => navigation.navigate('Consultation', { patient: 'Jane Doe' })} textColor='#07D1BF'>Start consultation</Button>}
        />
        <List.Item
          title="Jane Doe"
          description="Reason for visit : Back pain"
          left={(props) => <Avatar.Icon {...props} icon="account-circle" style={{backgroundColor: "#07D1BF"}} />}
          right={(props) => <Button {...props} mode="text" onPress={() => navigation.navigate('Consultation', { patient: 'Jane Doe' })} textColor='#07D1BF'>Start consultation</Button>}
        />
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
  cardContainer: {
    width: '90%',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  listContainer: {
    width: '90%',
    marginBottom: 20,
  },
  listTitle: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default DoctorScreen;
