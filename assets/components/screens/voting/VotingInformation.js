import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const VotingInformation = () => {
    const information = [
      { title: 'How to Vote', description: 'Follow these steps to cast your vote...' },
      { title: 'Voting Eligibility', description: 'To be eligible to vote, you must meet the following criteria...' },
      { title: 'Important Dates', description: 'Here are the important dates to keep in mind for this election...' },
    ];
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Voting Information</Text>
        {information.map((info, index) => (
          <View style={styles.infoContainer} key={index}>
            <Text style={styles.infoTitle}>{info.title}</Text>
            <Text style={styles.infoDescription}>{info.description}</Text>
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