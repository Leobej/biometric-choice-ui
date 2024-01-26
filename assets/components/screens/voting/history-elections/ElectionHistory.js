import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const ElectionHistory = ({ navigation }) => {
  const [elections, setElections] = useState([]);

  useEffect(() => {
    const fetchElections = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          setError("Authentication token not found");
          setLoading(false);
          return;
        }
        const response = await axios.get(
          "http://10.0.2.2:8080/elections/history",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // console.log(response.data);
        setElections(response.data.content);
      } catch (error) {
        console.error("Failed to fetch elections:", error);
      }
    };
    fetchElections();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Election History</Text>
      <ScrollView>
        {elections.map((election) => (
          <TouchableOpacity
            key={election.electionId}
            onPress={() =>
              navigation.navigate("ElectionHistoryDetails", {
                electionId: election.electionId,
              })
            }
          >
            <View style={styles.panel}>
              {/* <Text style={styles.title}>{election.name}</Text> */}
              <Text style={styles.title}>{election.description}</Text>
              <Text style={styles.panelText}>{`Start Date: ${new Date(
                election.startDate
              ).toLocaleDateString()}`}</Text>
              <Text style={styles.panelText}>{`End date: ${new Date(
                election.endDate
              ).toLocaleDateString()}`}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  panel: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#d0d0d0",
    borderStyle: "solid",
  },
  panelTitle: {
    fontSize: 26, // Increased font size
    fontWeight: "bold",
    textAlign: "center", // Centered text
  },
  panelText: {
    fontSize: 18, // Increased font size for regular text
    textAlign: "center", // Centered text
    marginTop: 4, // Optional spacing for better readability
  },
});
