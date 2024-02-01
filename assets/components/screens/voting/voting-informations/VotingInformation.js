import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export const VotingInformation = ({ navigation }) => {
  const [expandedInfo, setExpandedInfo] = useState(null);

  const information = [
    {
      title: "How to Register",
      details: ".",
    },
    {
      title: "How to Vote",
      details:
        "Step 1: Verify your registration...\nStep 2: Go to your polling station...\nStep 3: Cast your vote...",
    },
    {
      title: "Voting Eligibility",
      details:
        "Age requirement: Must be at least 18 years old...\nCitizenship requirement: Must be a citizen...\nResidency requirement: Must be a resident of...",
    },
  ];

  const navigateToDetails = (title) => {
    if (title === "How to Vote") {
      navigation.navigate("HowToVote");
    } else if (title === "Voting Eligibility") {
      navigation.navigate("VotingEligibility");
    } else if (title === "How to Register") {
      navigation.navigate("HowToRegister");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voting Information</Text>
      {information.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigateToDetails(item.title)}
        >
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>{item.title}</Text>
            <Text style={styles.infoDescription}>Click to read more</Text>
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
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  electionContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  electionName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  electionDate: {
    fontSize: 18,
  },

  infoTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  infoDescription: {
    fontSize: 18,
  },
  infoContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
});
