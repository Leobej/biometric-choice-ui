// PieChartScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const screenWidth = Dimensions.get("window").width;

const PieChartScreen = ({ electionId }) => {
  const [ageDistribution, setAgeDistribution] = useState([]);

  useEffect(() => {
    const fetchAgeDistribution = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.get(
          `http://10.0.2.2:8080/elections/${electionId}/age-distribution`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAgeDistribution(response.data);
      } catch (error) {
        console.error("Error fetching age distribution:", error);
      }
    };

    fetchAgeDistribution();
  }, [electionId]);

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(63, 143, 244, ${opacity})`,
  };

  // Example data format: [{name: "18-30", count: 10000}, ...]
  const ageColors = {
    "18-30": "rgba(70, 130, 180, 1)", // SteelBlue
    "31-50": "rgba(255, 165, 0, 1)",  // Orange
    "51+": "rgba(34, 139, 34, 1)"     // ForestGreen
  };

  // Create custom legend data
  const legendData = ageDistribution.map((group) => ({
    name: group.ageInterval,
    population: group.count,
    color: ageColors[group.ageInterval] || "rgba(128, 128, 128, 1)", // Grey if not defined
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  }));

  return (
    <View>
      <Text style={styles.chartTitle}>Pie Chart - Voter Age Distribution</Text>
      <PieChart
        data={legendData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        hasLegend={false} 
        center={[screenWidth / 4, 0]} 
        absolute
      />
      {/* Custom Legend */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {legendData.map((item, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", alignItems: "center", margin: 8 }}
          >
            <View
              style={{
                width: 18,
                height: 18,
                backgroundColor: item.color,
                marginRight: 8,
              }}
            />
            <Text
              style={{
                color: item.legendFontColor,
                fontSize: item.legendFontSize,
              }}
            >
              {`${item.name}: ${item.population}`}
            </Text>
          </View>
        ))}
      </ScrollView>
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

export default PieChartScreen;
