import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([
    { name: 'Dr. John Doe', specialty: 'Cardiologist' },
    { name: 'Dr. Jane Smith', specialty: 'Pediatrician' },
    { name: 'Dr. James Brown', specialty: 'Dermatologist' },
    { name: 'Dr. Emily Jones', specialty: 'Oncologist' },
    { name: 'Dr. David Lee', specialty: 'Neurologist' },
  ]);

  const renderDoctor = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <View style={{ backgroundColor: 'gray', width: 50, height: 50, borderRadius: 25 }} />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
        <Text>{item.specialty}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={doctors}
      renderItem={renderDoctor}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default DoctorList;
