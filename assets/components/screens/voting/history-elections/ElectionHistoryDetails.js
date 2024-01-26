import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ElectionStatisticsPanel } from "./ElectionStatisticsPanel";

export const ElectionHistoryDetails = ({ route }) => {
  const { electionId } = route.params;
  const [electionDetails, setElectionDetails] = useState(null);
  const [locationDetails, setLocationDetails] = useState(null);

  useEffect(() => {
    const fetchElectionDetails = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          console.error("Authentication token not found");
          return;
        }
        const response = await axios.get(
          `http://10.0.2.2:8080/elections/${electionId}/details`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Response ");
        console.log(response.data);
        setElectionDetails(response.data);
        if (response.data && response.data.locationId) {
          await fetchLocationDetails(response.data.locationId);
        }
      } catch (error) {
        if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          console.error(error.request);
        } else {
          console.error("Error", error.message);
        }
      }
    };

    fetchElectionDetails();
  }, [electionId]);

  const fetchLocationDetails = async (locationId) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        console.error("Authentication token not found");
        return;
      }
      const response = await axios.get(
        `http://10.0.2.2:8080/locations/${locationId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Location details:");
      console.log(response.data);
      setLocationDetails(response.data);
    } catch (error) {
      console.error("Error fetching location details:", error);
    }
  };

  if (!electionDetails || !locationDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{electionDetails.name}</Text>
      <Text>{electionDetails.description}</Text>
      <Text>{`Location: ${locationDetails.city}, ${locationDetails.street}, ${locationDetails.number}`}</Text>
      <ElectionStatisticsPanel electionDetails={electionDetails} />
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
