import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ElectionStatisticsPanel } from "./ElectionStatisticsPanel";
export const ElectionHistoryDetails = ({ route }) => {
  console.log(route);
  const { electionId } = route.params;
  const [electionDetails, setElectionDetails] = useState(null);

  useEffect(() => {
    const fetchElectionDetails = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          // Handle the error state appropriately
          console.error("Authentication token not found");
          return;
        }
        console.log(electionId);
        const response = await axios.get(
          `http://10.0.2.2:8080/elections/${electionId}/details`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(response);
        setElectionDetails(response.data); // Assuming the backend structure is { name: ..., description: ..., ... }
      } catch (error) {
        // More robust error handling
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error", error.message);
        }
      }
    };

    fetchElectionDetails();
  }, [electionId]);

  if (!electionDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{electionDetails.name}</Text>
      <Text>{electionDetails.description}</Text>
      <Text>{`Location: ${electionDetails.location}`}</Text>
      {/* Include the ElectionStatisticsPanel here */}
      <ElectionStatisticsPanel electionDetails={electionDetails} />
      {/* Display more details as needed */}
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
    fontSize: 24,
    fontWeight: "bold",
  },
  // ... additional styles
});
