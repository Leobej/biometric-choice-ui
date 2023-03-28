import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Title, Subheading, Text, List, Card } from 'react-native-paper';

export const UserDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.profileIconContainer}
        onPress={() => navigation.navigate('ProfileScreen')}
      >
        <Image
        //   source={require('./path/to/your/profile/image')}
          style={styles.profileIcon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>User Dashboard</Text>

      <TouchableOpacity onPress={() => navigation.navigate('ElectionHistory')}>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Last Voted Election</Text>
          <Text style={styles.panelSubtitle}>Election Name</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('UpcomingElections')}>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Upcoming Elections</Text>
          <Text style={styles.panelSubtitle}>Click to see upcoming elections</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('VotingInformation')}>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Voting Information</Text>
          <Text style={styles.panelSubtitle}>Click to see voting information</Text>
        </View>
      </TouchableOpacity>
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
  profileIconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
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
  panelSubtitle: {
    fontSize: 18,
  },
});
