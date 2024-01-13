// ElectionDetailsScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UpcomingElectionDetailsScreen = ({ route }) => {
  const { electionId } = route.params;
  const [electionDetails, setElectionDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const fetchElectionDetails = async () => {
      setLoading(true);
      setError("");
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          setError("Authentication token not found");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `http://10.0.2.2:8080/elections/${electionId}/details`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setElectionDetails(response.data);
      } catch (err) {
        setError("Could not fetch election details. " + err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchElectionDetails();
  }, [electionId]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{electionDetails?.description}</Text>
      <Text style={styles.detail}>
        Election ID: {electionDetails?.electionId}
      </Text>
      <Text style={styles.detail}>Location: {electionDetails?.location}</Text>
      <Text style={styles.detail}>
        Start Date: {formatDate(electionDetails?.startDate)}
      </Text>
      <Text style={styles.detail}>
        End Date: {formatDate(electionDetails?.endDate)}
      </Text>
      {/* Add more details you'd like to display */}
      {/* If candidates are to be listed */}
      {electionDetails?.candidates.map((candidate, index) => (
        <View key={index} style={styles.candidateContainer}>
          <Text style={styles.candidateName}>
            Candidate: {candidate.firstname} {candidate.lastname}
          </Text>
          {/* Display more candidate details if needed */}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detail: {
    fontSize: 18,
    marginBottom: 4,
  },
  candidateContainer: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 4,
  },
  candidateName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  // Add more styles as needed
  error: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  },
});
