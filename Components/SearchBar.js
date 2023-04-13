
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar() {

    return (
        <View style={styles.searchBar}>
            <TouchableOpacity style={styles.Icon}><Feather name="search" size={24} color="black" /></TouchableOpacity>
            <TextInput style = {styles.search} placeholder="search"/>
        </View>
    );
  
}
const styles = StyleSheet.create({
    searchBar:{
    marginBottom:10,
    flexDirection:'row',
     paddingBottom:5,
     paddingTop:5,
     marginHorizontal:20,
     borderRadius:20,
     backgroundColor:'white',
     width:330,
     marginLeft: 10,
    },
    Icon:{
        paddingLeft:10,
        paddingTop: 5,
    },
    search:{
        paddingLeft:10,
    }
});