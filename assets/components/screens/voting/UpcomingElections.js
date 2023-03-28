import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const UpcomingElections = () => {
  const elections = [
    { name: 'Election 1', date: 'April 1st, 2023' },
    { name: 'Election 2', date: 'May 1st, 2023' },
    { name: 'Election 3', date: 'June 1st, 2023' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Elections</Text>
      {elections.map((election, index) => (
        <View style={styles.electionContainer} key={index}>
          <Text style={styles.electionName}>{election.name}</Text>
          <Text style={styles.electionDate}>{election.date}</Text>
        </View>
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
    electionContainer: {
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    },
    electionName: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    electionDate: {
      fontSize: 18,
    },
    infoContainer: {
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    },
    infoTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    infoDescription: {
      fontSize: 18,
    },
  });