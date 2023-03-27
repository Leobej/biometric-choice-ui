// ElectionHistory.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const elections = [
  { id: 1, name: 'Election 1' },
  { id: 2, name: 'Election 2' },
  { id: 3, name: 'Election 3' },
];

export const ElectionHistory = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Election History</Text>
      {elections.map((election) => (
        <TouchableOpacity
          key={election.id}
          onPress={() =>
            navigation.navigate('VotingScreen', { electionId: election.id })
          }
        >
          <View style={styles.panel}>
            <Text style={styles.panelTitle}>{election.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  panel: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  panelTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});



