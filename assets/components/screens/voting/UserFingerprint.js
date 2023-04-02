import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';

const API_URL = 'http://192.168.24.236:8080';

export const UserFingerprint = ({ navigation }) => {
  const [fingerprint, setFingerprint] = useState('');


  const handleGetVoter = async () => {
    try {
      const response = await fetch(`${API_URL}/fingerprints/${fingerprint}`);
      const data = await response.json();
      
      navigation.navigate('UserRegistrationForm', { fingerprint:data.fingerprint  }); // navigate to the next screen with the fingerprint as a parameter
      console.debug(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Fingerprint"
        value={fingerprint}
        onChangeText={(text) => setFingerprint(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleGetVoter}>
        <Text style={styles.buttonText}>Get Voter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '90%',
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
