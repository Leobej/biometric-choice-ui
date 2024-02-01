import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export const HowToRegister = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>How to Register to Vote</Text>

        <Text style={styles.intro}>
          Registering to vote is a straightforward process designed to ensure
          your participation in the democratic process. Here's how you can get
          registered:
        </Text>

        <Text style={styles.stepTitle}>
          Step 1: Visit the Registration Section
        </Text>
        <Text style={styles.details}>
          Begin by visiting your local voter registration section. This could be
          a designated government office or other authorized location.
        </Text>

        <Text style={styles.stepTitle}>Step 2: Provide Identification</Text>
        <Text style={styles.details}>
          Present your official identification document. This is typically an ID
          card which will be used to record essential details like your CNP
          (personal numeric code), date of birth, and place of birth.
        </Text>

        <Text style={styles.stepTitle}>Step 3: Fingerprint Scanning</Text>
        <Text style={styles.details}>
          You will be asked to provide your fingerprint for authentication
          purposes. Place your finger on the fingerprint scanner as instructed.
          A successful scan will require you to place your finger on the scanner
          twice. This ensures accuracy and enhances the security of the
          registration process.
        </Text>

        <Text style={styles.stepTitle}>
          Step 4: Confirmation of Registration
        </Text>
        <Text style={styles.details}>
          Once your fingerprint is successfully scanned and your details are
          recorded, you’ll be officially registered in the voter database. You
          will receive a confirmation indicating that your registration is
          complete and successful.
        </Text>

        <Text style={styles.conclusion}>
          Remember, being registered allows you to exercise your right to vote
          and have a say in the democratic governance of your community and
          country.
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
  intro: {
    fontSize: 18,
    marginBottom: 10,
  },
  stepTitle: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 20,
  },
  details: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 10,
  },
  conclusion: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default HowToRegister;
