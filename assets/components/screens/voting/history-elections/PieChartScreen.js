// PieChartScreen.js
import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const PieChartScreen = ({ data }) => {
  // Transform your data to a format suitable for PieChart
  console.log(data);


  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2, // optional
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(63, 143, 244, ${opacity})`,

  };

  return (
    <View>
      <Text>Pie Chart</Text>
      {/* <PieChart
        data={chartData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
      /> */}
    </View>
  );
};

export default PieChartScreen;
