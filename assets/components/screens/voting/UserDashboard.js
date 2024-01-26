import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Title, Subheading, Text, List, Card } from "react-native-paper";

export const UserDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>User Dashboard</Text>

      <TouchableOpacity onPress={() => navigation.navigate("ElectionHistory")}>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Election History</Text>
          <Text style={styles.panelSubtitle}>
            Click to see elections history
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("UpcomingElections")}
      >
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Upcoming Elections</Text>
          <Text style={styles.panelSubtitle}>
            Click to see upcoming elections
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("VotingInformation")}
      >
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Voting Information</Text>
          <Text style={styles.panelSubtitle}>
            Click to see voting information
          </Text>
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
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  profileIconContainer: {
    alignItems: "center", // Ensure the profile icon is centered horizontally
    marginBottom: 20,
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1, // Add a border to the profile icon
    borderColor: "#d0d0d0", // Set border color
  },
  panel: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1, // Add a border to the panel
    borderColor: "#d0d0d0", // Set border color
  },
  panelTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center", // Center the panel title
  },
  panelSubtitle: {
    fontSize: 18,
    textAlign: "center", // Center the panel subtitle
    marginTop: 4, // Add some space between the title and subtitle
  },
});
