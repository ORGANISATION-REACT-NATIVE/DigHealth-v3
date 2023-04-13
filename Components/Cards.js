import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Modal, Alert, Pressable, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Cards() {
  const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.Card}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
              }}>
                <View style={styles.modalView}>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                      <AntDesign name="closecircle" size={25} color="black" />
                    </Pressable>
                    <Image style={styles.modalImage} source={{uri: 'https://th.bing.com/th?id=OIP.yHfrnvWGnLHVqYadsmLy-QHaIi&w=232&h=268&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'}} />
                    <Text style={styles.modalText}>Lorem ipsum dolor </Text>
                    <Text style={styles.modalText}>Lorem ipsum </Text>
                </View>
            </Modal>
              <View style={styles.CardHeader1}>
                <TouchableOpacity style={styles.Icon}>
                  <MaterialCommunityIcons name="pencil-circle" size={35} color="white" />
                </TouchableOpacity>
                <Text style={styles.CardName}>
                  Write Prescription
                </Text>
                <Text style={styles.CardDesc}>
                  to patient
                </Text>
                <View style={styles.CardsAction}>
                  <Text style={styles.CardType}>TEMPLATE</Text>
                  <TouchableOpacity style={styles.IconAct}>
                    <Pressable
                      onPress={() => setModalVisible(!modalVisible)}>
                        <Ionicons name="arrow-forward-circle" size={35} color="black" />
                    </Pressable>
                  </TouchableOpacity>
              </View>
            </View>
            {/* end CardHeader */}

            {/* start CardsAction */}
           
          <View style={styles.CardHeader2}>
              <TouchableOpacity style={styles.Icon}>
              <MaterialCommunityIcons name="pencil-circle" size={35} color="white" />
              </TouchableOpacity>
              <Text style={styles.CardName}>
                Lorem
              </Text>
              <Text style={styles.CardDesc}>
                Continue to fill patient profile
              </Text>
               {/* start CardsAction */}
            <View style={styles.CardsAction}>
                <Text style={styles.CardType}>REMINDER</Text>
                <TouchableOpacity style={styles.IconAct}>
                <Pressable
                      onPress={() => setModalVisible(!modalVisible)}>
                        <Ionicons name="arrow-forward-circle" size={35} color="black" />
                    </Pressable>
                </TouchableOpacity>
            </View>
          </View>

          <View style={styles.CardHeader3}>
              <TouchableOpacity style={styles.Icon}>
              <MaterialCommunityIcons name="pencil-circle" size={35} color="white" />
              </TouchableOpacity>
              <Text style={styles.CardName}>
                Lorem
              </Text>
              <Text style={styles.CardDesc}>
                Continue to fill patient profile
              </Text>
               {/* start CardsAction */}
            <View style={styles.CardsAction}>
                <Text style={styles.CardType}>REMINDER</Text>
                <TouchableOpacity style={styles.IconAct}>
                <Pressable
                      onPress={() => setModalVisible(!modalVisible)}>
                        <Ionicons name="arrow-forward-circle" size={35} color="black" />
                    </Pressable>
                </TouchableOpacity>
            </View>
          </View>
          </View>
          </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop:10,
  },
  Card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalView: {
    margin: 30,
    marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    marginTop: 10,
    width: 290,
    height: 300,
    borderRadius: 20,
  },
  button: {
    right: 0,
    position: 'absolute',
    top: 0,
    padding: 20,
  },
  CardHeader1: {
    width: '100%',
    height: '10%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  CardHeader2: {
    width: '100%',
    height: '10%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
    Card:{
      justifyContent:'space-between',
      flexDirection:'row', 
    },
    CardHeader1:{
      marginTop:30,
      marginBottom:20,
      backgroundColor:'#B0ECAD',
      marginLeft:10,
      width:200,
      borderRadius:15,
      height: 'auto'
    },
    CardHeader2:{
      marginTop:30,
      marginBottom:20,
      backgroundColor:'#9AA0FC',
      marginLeft:25,
      width:200,
      borderRadius:15,
    },
    CardHeader3: {
      marginTop:30,
      marginBottom:20,
      backgroundColor:'yellow',
      marginLeft:25,
      marginRight: 10,
      width:200,
      borderRadius:15,
    },
    CardName:{
      fontSize:20,
      fontWeight:'bold',
      paddingTop:20,
      paddingLeft:10,
    },
    CardDesc:{
      fontSize:15,
      paddingTop:3,
      paddingLeft:10,
    },
    CardsAction:{
      justifyContent:'space-between',
      flexDirection:'row',
      paddingTop:30,
      paddingLeft:20,
    },
    CardType:{
      paddingTop:18,
    },
    IconAct:{
      paddingRight:5,
      paddingTop:8,
    },
    Icon:{
      paddingLeft:20,
      paddingTop:15,
    }
});
