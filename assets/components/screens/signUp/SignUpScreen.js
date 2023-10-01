import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Implement sign-up logic using your authentication method
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/* <ImageBackground
        source={require("../../images/HomeScreenImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      > */}
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
            onPress={() => navigation.navigate("UserFingerprint")}
            style={styles.button}
            labelStyle={styles.buttonText}
            buttonColor="rgba(255, 0, 0, 0.2)"
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
      {/* </ImageBackground> */}
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
