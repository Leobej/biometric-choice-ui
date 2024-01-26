// LineChartScreen.js
import React from "react";
import { View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width+50;
const LineChartScreen = ({ datathing }) => {

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundColor: "#e26a00",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(63, 0, 244, ${opacity})`,
    strokeWidth: 5, // optional, default 3
    decimalPlaces: 0, 
    
    propsForDots: {
      r: "6",
      strokeWidth: "1",
      stroke: "#ffa726"
    },
  };

  const chartData = {
    labels: ["20.10.2024", "21.10.2024", "22.10.2024"],
    datasets: [
      {
        data: [20, 45, 28],
      
      },
    ],
  };

  return (
    <View>
      <Text>Number of votes on each day of the elections</Text>
      <LineChart
        data={chartData}
        width={screenWidth}
        height={600}
        chartConfig={chartConfig}
        xAxisLabel=""
        yAxisLabel=""
     
      />
    </View>
  );
};

export default LineChartScreen;
