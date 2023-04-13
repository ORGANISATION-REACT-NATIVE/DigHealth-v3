import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Title } from 'react-native-paper';

export default function CalendrierScreen() {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Calendar</Title>
      <Calendar
        current={'2023-03-21'}
        markedDates={{
          '2023-03-21': { selected: true, selectedColor: '#009387' },
          '2023-03-22': { marked: true, dotColor: '#009387' },
          '2023-03-23': { marked: true, dotColor: '#009387' },
          '2023-03-25': { marked: true, dotColor: '#009387' },
          '2023-03-26': { marked: true, dotColor: '#009387' },
          '2023-03-27': { marked: true, dotColor: '#009387' },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginVertical: 20,
  },
});
