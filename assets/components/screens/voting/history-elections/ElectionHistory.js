import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
        console.log(response.data);
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
            <Text style={styles.panelTitle}>{election.name}</Text>
            <Text>{election.description}</Text>
            <Text>{`Date: ${new Date(
              election.date
            ).toLocaleDateString()}`}</Text>
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
  panel: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  panelTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
