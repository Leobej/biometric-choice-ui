import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export const UpcomingElections = () => {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const fetchElections = async () => {
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
          "http://10.0.2.2:8080/elections/upcoming",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // Extracting the 'content' array from the response data
        setElections(response.data.content);
        console.log(response.data.content);
      } catch (err) {
        setError("Could not fetch elections. " + err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchElections();
  }, []);

  const renderItem = ({ item }) => {
    const navigateToDetails = () => {
      navigation.navigate("UpcomingElectionDetailsScreen", { electionId: item.electionId });
    };

    // Function to format the date strings
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

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigateToDetails(item)}
      >
        <Text style={styles.title}>{item.description}</Text>
        <Text style={styles.date}>
          Start Date: {formatDate(item.startDate)}
        </Text>
        <Text style={styles.date}>End Date: {formatDate(item.endDate)}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={elections}
          renderItem={renderItem} 
          keyExtractor={(item) => item.electionId.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    width: "100%", // Ensure full width
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    marginBottom: 4,
  },
  error: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  },
});
