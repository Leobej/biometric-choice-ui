// BarChartScreen.js
import React from "react";
import { View, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const BarChartScreen = ({ dataProps }) => {
  // const chartData = {
  //   labels: data.candidates.map(candidate => candidate.firstname + ' ' + candidate.lastname),
  //   datasets: [{ data: data.candidates.map(candidate => candidate.voteCount) }]
  // };
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    style: {
      borderRadius: 16,
    },
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const width = Dimensions.get("window").width;
  const height = 220;

  const graphStyle = {
    marginVertical: 8,
    ...chartConfig.style,
  };
  return (
    <View>
      <Text>Bar Chart</Text>
      <BarChart
        width={width}
        height={height}
        data={data}
        chartConfig={chartConfig}
        style={graphStyle}
      />
    </View>
  );
};

export default BarChartScreen;
