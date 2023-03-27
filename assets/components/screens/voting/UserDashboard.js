// UserDashboard.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const UserDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Dashboard</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ElectionHistory')}>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Last Voted Election</Text>
          <Text style={styles.panelSubtitle}>Election Name</Text>
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



