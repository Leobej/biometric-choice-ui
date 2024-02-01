import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export const VotingEligibility = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Voting Eligibility in Romania</Text>

        <Text style={styles.details}>
          <Text style={styles.criteriaTitle}>Age Requirement:</Text>{"\n"}
          You must be at least 18 years old on or before election day to be eligible to vote.{"\n\n"}

          <Text style={styles.criteriaTitle}>Citizenship:</Text>{"\n"}
          Only Romanian citizens are eligible to vote in national elections. However, EU citizens residing in Romania can participate in local and European Parliament elections.{"\n\n"}

          <Text style={styles.criteriaTitle}>Residency:</Text>{"\n"}
          As a resident of Romania, you are eligible to vote. Romanian citizens living abroad are also entitled to vote.{"\n\n"}

          <Text style={styles.criteriaTitle}>Registration:</Text>{"\n"}
          Registration is a mandatory step for voting. It is conducted at designated registration sections by appointed officers.{"\n\n"}

          <Text style={styles.criteriaTitle}>Legal Capacity:</Text>{"\n"}
          Eligibility requires that you are not legally incapacitated.{"\n\n"}

          <Text style={styles.criteriaTitle}>No Disqualifications:</Text>{"\n"}
          Certain legal conditions, such as specific criminal convictions, may result in temporary disqualification from voting.{"\n\n"}

          <Text style={styles.conclusion}>
            It's important to carry a valid ID to the polling station and ensure that your voter registration details are accurate and up-to-date before election day.
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  details: {
    fontSize: 18,
    lineHeight: 24,
  },
  criteriaTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 8,
  },
  conclusion: {
    fontWeight: "bold",
    marginTop: 12,
  },
});

export default VotingEligibility;
