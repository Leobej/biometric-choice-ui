import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, List, Title } from "react-native-paper";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const candidates = [
  { id: 1, name: "E.B.", votes: 120 },
  { id: 2, name: "A.V.", votes: 80 },
  { id: 3, name: "B.L.", votes: 150 },
  { id: 4, name: "C.A.", votes: 550 },
  { id: 5, name: "V.C", votes: 1050 },

];

export const VotingScreen = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleCandidatePress = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const renderChart = () => {
    return (
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryBar
          data={candidates}
          x="name"
          y="votes"
          style={{
            data: {
              fill: ({ datum }) =>
                selectedCandidate && selectedCandidate.id === datum.id
                  ? "rgba(134, 65, 244, 0.8)"
                  : "rgba(134, 65, 244, 0.4)",
            },
          }}
          events={[
            {
              target: "data",
              eventHandlers: {
                onPressIn: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        const candidate = candidates.find(
                          (c) => c.name === props.datum.name
                        );
                        handleCandidatePress(candidate);
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
      </VictoryChart>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title style={styles.title}>Voting Screen</Title>
        {renderChart()}
        <Title style={styles.subtitle}>Candidates</Title>
        {candidates.map((candidate) => (
          <TouchableOpacity
            key={candidate.id}
            onPress={() => handleCandidatePress(candidate)}
          >
            <List.Item
              title={candidate.name}
              description={`Votes: ${candidate.votes}`}
              style={[
                styles.listItem,
                selectedCandidate && selectedCandidate.id === candidate.id
                  ? styles.selectedItem
                  : null,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedItem: {
    backgroundColor: "#eee",
  },
});

export default VotingScreen;
