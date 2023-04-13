
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function TopBar({ navigation }) {
  
    return (
    
    <View style={styles.topbar}>
        {/* start top bar */}
       <TouchableOpacity style={styles.topbarbutton} onPress={() => navigation.navigate('ListPrescription')}>
        <FontAwesome name="th-list" size={30} color="black" />
        </TouchableOpacity>
       <TouchableOpacity style={styles.topbarbutton} onPress={() => navigation.navigate('Appointment')}>
            <MaterialCommunityIcons name="bell" size={30} color="black" />
       </TouchableOpacity>
       {/* end topbar */}
     </View>
    
    );
    }
const styles = StyleSheet.create({
    topbar: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      
      },
  topbarbutton: {
    width: 48,
    height: 48,
    backgroundColor:'white',
    borderRadius:20,
    alignItems:'center',
    paddingTop:5,
  }
    
});
