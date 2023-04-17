import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-paper";

const API_URL = "http://192.168.0.110:8080";

export const UserFingerprint = ({ navigation }) => {
  const [fingerprint, setFingerprint] = useState("");
  const [deviceId, setDeviceId] = useState("");

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch(`${API_URL}/fingerprints/1`);
        const data = await response.json();
        console.log(data);
        if (data && data.deviceId) {
          setFingerprint(data.fingerprint);
          setDeviceId(data.deviceId);
        }
      } catch (error) {
        console.log("error");
        console.error(error);
      }
    }, 5000); // poll for new fingerprints every 5 seconds

    return () => clearInterval(intervalId); // clear the interval on unmount
  }, []);

  const handleGetVoter = () => {
    navigation.navigate("UserRegistrationForm", {
      fingerprint,
      deviceId,
    }); // navigate to the next screen with the fingerprint and deviceId as parameters
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="Device ID"
        value={deviceId}
        onChangeText={(text) => setDeviceId(text)}
      />
      <TouchableOpacity
        style={[styles.button, { opacity: fingerprint ? 1 : 0.5 }]}
        onPress={handleGetVoter}
        disabled={!fingerprint}
      >
        <Text style={styles.buttonText}>Register User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: "90%",
  },
  button: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
