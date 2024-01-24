// PieChartScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const PieChartScreen = ({ data }) => {
  // Transform your data to a format suitable for PieChart
  const chartData = data.candidates.map(candidate => ({
    name: candidate.firstname + ' ' + candidate.lastname,
    population: candidate.voteCount,
    color: 'random-color', // You can generate random colors or define specific ones
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  }));

  return (
    <View>
      <Text>Pie Chart</Text>
      <PieChart
        data={chartData}
        width={320}
        height={220}
        chartConfig={{ /* ... */ }}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        absolute
      />
    </View>
  );
};

export default PieChartScreen;
