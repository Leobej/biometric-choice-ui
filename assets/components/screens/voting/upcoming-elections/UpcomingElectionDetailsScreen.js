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
  const [locationDetails, setLocationDetails] = useState(null);
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

  const fetchLocationDetails = async (locationId) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        setError("Authentication token not found");
        return;
      }
      const response = await axios.get(
        `http://10.0.2.2:8080/locations/${locationId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setLocationDetails(response.data);
    } catch (error) {
      setError("Could not fetch location details. " + error.message);
      console.error(error);
    }
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
        if (electionDetails && electionDetails.locationId) {
          fetchLocationDetails(electionDetails.locationId);
        }
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
      <Text style={styles.detail}>
        Location:{" "}
        {locationDetails
          ? locationDetails.city +
            ", " +
            locationDetails.street +
            ", " +
            locationDetails.number
          : "Loading location..."}
      </Text>
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
    backgroundColor: "#f9f9fb", // Soft background color
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#34568B", // Dark blue for main titles
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333333", // Dark gray for text
  },
  candidateContainer: {
    padding: 15,
    marginTop: 15,
    backgroundColor: "#e3f2fd", // Light blue background for candidates
    borderRadius: 8,
    shadowColor: "#000", // Shadow for a subtle "lifted" effect
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  candidateName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34568B", // Dark blue for candidate names
  },
  error: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});
