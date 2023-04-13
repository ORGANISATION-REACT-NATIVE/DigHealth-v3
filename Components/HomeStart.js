import {React} from 'react';
import {StyleSheet,View ,Text,  TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function HomeStart({navigation}) {
  return (
    <View style={styles.homeStart}>
    {/* Start Stat */}
    <View style={styles.stat}>
      {/* Start StatValue */}
        <View style={styles.statValue}>
            <Text style={styles.value}>12</Text>
            <View style={styles.percentage}>
            <Text><AntDesign name="arrowup" size={14} color="green" />
            <Text>2% today</Text></Text>
            </View>
        </View>
      {/* end StatValue */}
        <Text style={styles.statLabel}>Patient appointments</Text>
    </View>

    {/* end Stat */}
    
    <TouchableOpacity style={styles.IconPlus}>
      <Ionicons name="md-add-circle" size={55} color="black" onPress={() => navigation.navigate('AddPrescription')} />
    </TouchableOpacity>
  </View>
    );
}
const styles = StyleSheet.create({
  homeStart: {
        paddingHorizontal: 24,
        paddingVertical: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      },
  value:{
    fontSize:55,
    fontWeight:'bold',
    marginBottom:10,
  },
  percentage:{
    justifyContent:'center',
    backgroundColor:'white',
    borderRadius:20,
    alignItems:'center',
    width:80,
    marginLeft:10,
    marginTop:45,
    height:20,     
  },
  IconPlus:{
    paddingVertical:40,
    marginLeft:120,
  },
  statValue:{
    flexDirection:'row',
  }
});