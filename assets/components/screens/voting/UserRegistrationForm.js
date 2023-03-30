import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity,ScrollView,KeyboardAvoidingView  } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
const API_URL = 'http://192.168.0.110:8080';

export const UserRegistrationForm = ({ route,navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [cnp, setCnp] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [password, setPassword] = useState('');
  const fingerprint = route.params.fingerprint;
  const handleSubmit = async () => {
   
    console.log(route.params)
    
    try {
      const response = await fetch(`${API_URL}/voters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fingerprint,
          firstname,
          lastname,
          cnp,
          createdAt,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register to Vote</Text>
      <View style={styles.fingerprintData}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.text}>{firstname}</Text>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.text}>{lastname}</Text>
        <Text style={styles.label}>CNP:</Text>
        <Text style={styles.text}>{cnp}</Text>
        {/* <Text style={styles.label}>Fingerprint:</Text>
        <Text style={styles.text}>{fingerprintData}</Text> */}
      </View>
      <KeyboardAvoidingView style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstname}
          onChangeText={(text) => setFirstname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastname}
          onChangeText={(text) => setLastname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CNP"
          value={cnp}
          onChangeText={(text) => setCnp(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Created At"
          value={createdAt}
          onChangeText={(text) => setCreatedAt(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fingerprintData: {
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  form: {},
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
