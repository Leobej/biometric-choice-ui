import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import PieChartScreen from "./PieChartScreen"; // Import your chart screens
import BarChartScreen from "./BarChartScreen";
import LineChartScreen from "./LineChartScreen";
import HistogramScreen from "./HistogramScreen";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

export const ElectionStatisticsPanel = ({ electionDetails, electionId }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "pie", title: "Pie" },
    { key: "bar", title: "Bar" },
    { key: "line", title: "Line" },
      // { key: "histogram", title: "Hist" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "pie":
        return (
          <PieChartScreen data={electionDetails} electionId={electionId} />
        );
      case "bar":
        return (
          <BarChartScreen data={electionDetails} electionId={electionId} />
        );
      case "line":
        return (
          <LineChartScreen data={electionDetails} electionId={electionId} />
        );
      // case "histogram":
      //   return <HistogramScreen data={electionDetails} />;
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({route, color}) => (
        <Text style={{ color: 'black'}}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{ backgroundColor: "red" }}
      style={{
        backgroundColor: "white",
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderBottomWidth: 1,
      
      }}
      activeColor="black"
      tabStyle={{color: "black" }}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, margin: 2 }}>
          {route.title}
        </Text>
      )}
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
