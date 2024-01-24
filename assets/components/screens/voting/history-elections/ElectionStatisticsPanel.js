import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
// import { PieChart, BarChart, LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import PieChartScreen from "./PieCharScreen"; // Import your chart screens
import BarChartScreen from "./BarChartScreen";
import LineChartScreen from "./LineChartScreen";
import HistogramScreen from "./HistogramScreen";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";


const initialLayout = { width: Dimensions.get("window").width };

export const ElectionStatisticsPanel = ({ electionDetails }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "pie", title: "Pie Chart" },
    { key: "bar", title: "Bar Chart" },
    { key: "line", title: "Line Chart" },
    { key: "histogram", title: "Histogram" },
  ]);

  const renderScene = SceneMap({
    pie: () => <PieChartScreen data={electionDetails} />,
    bar: () => <BarChartScreen data={electionDetails} />,
    line: () => <LineChartScreen data={electionDetails} />,
    histogram: () => <HistogramScreen data={electionDetails} />,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={(props) => <TabBar {...props} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
