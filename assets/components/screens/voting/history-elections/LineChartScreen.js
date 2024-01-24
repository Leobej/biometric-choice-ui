// LineChartScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const LineChartScreen = ({ data }) => {
  // Example data, replace with actual time-series data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ data: [20, 45, 28, 80, 99, 43] }]
  };

  return (
    <View>
      <Text>Line Chart</Text>
      <LineChart
        data={chartData}
        width={320}
        height={220}
        chartConfig={{ /* ... */ }}
        bezier
      />
    </View>
  );
};

export default LineChartScreen;