// BarChartScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const BarChartScreen = ({ data }) => {
  const chartData = {
    labels: data.candidates.map(candidate => candidate.firstname + ' ' + candidate.lastname),
    datasets: [{ data: data.candidates.map(candidate => candidate.voteCount) }]
  };

  return (
    <View>
      <Text>Bar Chart</Text>
      <BarChart
        data={chartData}
        width={320}
        height={220}
        chartConfig={{ /* ... */ }}
        verticalLabelRotation={30}
      />
    </View>
  );
};

export default BarChartScreen;
