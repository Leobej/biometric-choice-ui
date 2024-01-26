import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import PieChartScreen from "./PieChartScreen"; // Import your chart screens
import BarChartScreen from "./BarChartScreen";
import LineChartScreen from "./LineChartScreen";
import HistogramScreen from "./HistogramScreen";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

export const ElectionStatisticsPanel = ({ electionDetails }) => {
  const layout = useWindowDimensions()+100;

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "pie", title: "Pie" },
    { key: "histogram", title: "Hist" },
    { key: "bar", title: "Bar" },
    { key: "line", title: "Line" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "pie":
        return <PieChartScreen data={electionDetails} />;
      case "bar":
        return <BarChartScreen data={electionDetails} />;
      case "line":
        return <LineChartScreen data={electionDetails} />;
      case "histogram":
        return <HistogramScreen data={electionDetails} />;
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
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
