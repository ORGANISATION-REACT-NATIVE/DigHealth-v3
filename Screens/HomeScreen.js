import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import AppointmentCard from '../Components/AppointmentCard';
import DoctorList from '../Components/DoctorList';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  return (
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.descriptionUser}>
        <Text style={styles.appName}>Hello</Text>
        <Text style={styles.nameUser}>FOSSA👋🏽👋🏽</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
          <FontAwesome name="user-circle" size={40} color="black" />
        </TouchableOpacity>
      </View>
    
        {/*<Text style={styles.descriptionText}>Welcome to my app! Here you can find all the information you need about...</Text>*/}
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={24} color="black" style={styles.icon} />
          <TextInput placeholder="Rechercher" style={styles.input} />
        </View>
      
      <Image source={require("../assets/undraw_Best_place_re_lne9.png")} style={{width: 350, height: 200, margin: 0, padding: 0}} />
        <View style={styles.imageBox}>
        <TouchableOpacity style={styles.iconContainer}>
        <MaterialIcons name="favorite" size={30} color="blue" />
        <Text style={styles.description}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <MaterialIcons name="accessibility" size={30} color="blue" />
        <Text style={styles.description}>Body</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <MaterialIcons name="alarm" size={30} color="blue" />
        <Text style={styles.description}>Sleep</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <MaterialIcons name="attach-money" size={30} color="blue" />
        <Text style={styles.description}>Money</Text>
      </TouchableOpacity>
        </View>
        <AppointmentCard />
      <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('Map')}>
        <FontAwesome name="map-marker" size={24} color="black" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  descriptionUser: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',

  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nameUser: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    right: 20,
  },
  description: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchBar:{
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  description: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
  },
  imageBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  cardAppoitment:{

  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#007AFF',
    borderRadius: 90,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  }
});

export default HomeScreen;
