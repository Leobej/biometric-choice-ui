import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from "axios"; // Ensure axios is importedq

export const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (!email.includes("@")) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match");
      return;
    }

    try {
      // HTTP POST request to backend
      const response = await axios.post(
        "http://10.0.2.2:8080/mobile-users/register",
        {
          email,
          password,
        }
      );
      console.log(response);

      if (response.status === 201) {
        Alert.alert("Success", "User created successfully", [
          { text: "OK", onPress: () => navigation.navigate("HomeScreen") },
        ]);
      }
    } catch (error) {
      Alert.alert(
        "Registration Failed",
        "Failed to create user: " + error.message
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Title style={styles.title}>Sign Up</Title>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          mode="outlined"
          secureTextEntry
        />
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          mode="outlined"
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={handleSignUp}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Sign Up
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("HomeScreen")}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Back
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
    alignSelf: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
  },
});
