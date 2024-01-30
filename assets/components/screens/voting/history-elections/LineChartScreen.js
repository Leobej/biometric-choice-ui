import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const screenWidth = Dimensions.get("window").width + 50;

const LineChartScreen = ({ electionDetails, electionId }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  });
  const [loading, setLoading] = useState(true);

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundColor: "#e26a00",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(63, 0, 244, ${opacity})`,
    strokeWidth: 5,
    decimalPlaces: 0,

    propsForDots: {
      r: "6",
      strokeWidth: "1",
      stroke: "#ffa726",
    },
  };

  const formatChartData = (data) => {
    if (!data || !Array.isArray(data)) {
      console.log("Invalid or empty data received");
      return { labels: [], datasets: [{ data: [] }] };
    }

    const labels = data.map((item) =>
      new Date(item.date).toLocaleDateString("en-US")
    );
    const dataPoints = data.map((item) => item.totalVotes);

    const formattedData = {
      labels,
      datasets: [{ data: dataPoints }],
    };
    if (formattedData.datasets && formattedData.datasets.length > 0) {
      console.log("Data Array:", formattedData.datasets[0].data);
    }

    return formattedData;
  };

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        `http://10.0.2.2:8080/elections/${electionId}/voting-trends`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Fetched Data:", response.data);

      const formattedChartData = formatChartData(response.data);
      console.log("Formatted Chart Data:", formattedChartData);
      setChartData(formattedChartData);
      console.log("Chart Data:", chartData);
    } catch (error) {
      console.error("Failed to fetch chart data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text style={styles.chartTitle}>Number of votes on each day of the elections</Text>
      {loading ? (
        <Text>Loading Chart...</Text>
      ) : chartData && chartData.labels.length > 0 ? (
        <LineChart
          data={chartData}
          width={screenWidth}
          height={600}
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

export default LineChartScreen;
