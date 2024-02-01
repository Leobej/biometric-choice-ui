import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export const HowToVote = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>How to Vote</Text>

        <Text style={styles.details}>
          <Text style={styles.stepTitle}>Step 1: CNP Verification</Text>{"\n"}
          Begin by entering your CNP (personal numeric code) on the keypad provided. This step verifies your registration and eligibility to vote.{"\n\n"}

          <Text style={styles.stepTitle}>Step 2: Fingerprint Authentication</Text>{"\n"}
          Upon successful CNP verification, the fingerprint scanner will activate. Place your finger on the scanner for identity authentication.{"\n\n"}

          <Text style={styles.stepTitle}>Step 3: Selecting a Candidate</Text>{"\n"}
          Once your fingerprint is recognized, candidates will be displayed on the screen. Navigate through the list using the joystick to move up and down.{"\n\n"}

          <Text style={styles.stepTitle}>Step 4: Casting Your Vote</Text>{"\n"}
          After selecting your preferred candidate, press the joystick to confirm and send your vote.{"\n\n"}

          <Text style={styles.conclusion}>
            Following these steps ensures a smooth and secure voting experience. Your vote is a valuable part of the democratic process.
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
  stepTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 8,
  },
  conclusion: {
    fontWeight: "bold",
    marginTop: 12,
  },
});

export default HowToVote;
