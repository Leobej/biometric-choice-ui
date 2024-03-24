// BarChartScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BarChartScreen = ({ electionDetails, electionId }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  const chartConfig = {
    backgroundGradientFrom: "#f7b733", 
    backgroundGradientFromOpacity: 0.5,
    backgroundGradientTo: "#fc4a1a", 
    backgroundGradientToOpacity: 0.8,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
    strokeWidth: 2,
    barPercentage: 0.5,
    barColors: [
      "#d35400",
      "#c0392b",
      "#8e44ad",
      "#2980b9",
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
    ], // Array of bar colors
    useShadowColorFromDataset: false,
    style: {
      borderRadius: 16,
    },
  };

  const width = Dimensions.get("window").width;
  const height = 220;

  const graphStyle = {
    marginVertical: 8,
    ...chartConfig.style,
  };

  const fetchElectionData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const electionResponse = await axios.get(
        `http://10.0.2.2:8080/elections/${electionId}/details`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const aggregatedVotesResponse = await axios.get(
        `http://10.0.2.2:8080/elections/${electionId}/aggregated-votes`,
        { headers: { Authorization: `Bearer ${token}` } }
      );


      const sortedCandidates = electionResponse.data.candidates
        .map((candidate) => {
          return {
            ...candidate,
            voteCount:
              aggregatedVotesResponse.data.find(
                (vote) => vote.candidateId === candidate.candidateId
              )?.voteCount || 0,
          };
        })
        .sort((a, b) => b.voteCount - a.voteCount);

        console.log("Sorted Candidates:", sortedCandidates);
      // Format data for bar chart
      const labels = sortedCandidates.map(
        (candidate) => `${candidate.firstname} ${candidate.lastname}`
      );

      const dataPoints = sortedCandidates.map(
        (candidate) => candidate.voteCount
      );

      setChartData({
        labels: labels,
        datasets: [{ data: dataPoints }],
      });

      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch election data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchElectionData();
  }, [electionId]);

  return (
    <View>
      <Text style={styles.chartTitle}>Bar Chart - Votes per Candidate</Text>
      {loading ? (
        <Text>Loading Chart...</Text>
      ) : chartData ? (
        <BarChart
          width={width}
          height={height}
          data={chartData}
          chartConfig={chartConfig}
        />
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chartTitle: {
    fontSize: 22, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 20, 
    marginBottom: 10, 
    color: '#2c3e50', 
  },
});

export default BarChartScreen;
