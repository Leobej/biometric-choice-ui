import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, List, Title } from "react-native-paper";
import { BarChart } from "react-native-chart-kit";

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
      <View>
      <BarChart
        data={{
          labels: candidates.map((candidate) => candidate.name),
          datasets: [
            {
              data: candidates.map((candidate) => candidate.votes),
              color: (opacity = 1) =>
                selectedCandidate &&
                selectedCandidate.name === candidate.name
                  ? `rgba(134, 65, 244, ${opacity})`
                  : `rgba(134, 65, 244, ${opacity})`,
            },
          ],
        }}
        width={350}
        height={220}
        yAxisLabel="Votes"
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        onDataPointClick={(dataPoint) => {
          const candidate = candidates.find((c) => c.name === dataPoint.label);
          handleCandidatePress(candidate);
        }}
      />
    </View>
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
