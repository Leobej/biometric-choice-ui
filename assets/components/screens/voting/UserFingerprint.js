import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';

const API_URL = '10.0.2.2';

export const UserFingerprint = () => {
  const [fingerprint, setFingerprint] = useState("");
  const [voter, setVoter] = useState({});
  const [createdAt, setCreatedAt] = useState('');
  const [password, setPassword] = useState('');

  const handleGetVoter = async () => {
   try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePostVoter = async () => {
    try {
      const response = await fetch(`${API_URL}/voters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fingerprint,
          firstName: voter.firstName,
          lastName: voter.lastName,
          cnp: voter.cnp,
          createdAt,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
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
      {voter.firstName && (
        <>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.text}>{voter.firstName}</Text>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.text}>{voter.lastName}</Text>
          <Text style={styles.label}>CNP:</Text>
          <Text style={styles.text}>{voter.cnp}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Created At"
            value={createdAt}
            onChangeText={(text) => setCreatedAt(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handlePostVoter}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </>
      )}
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
