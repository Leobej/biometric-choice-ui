import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export const ElectionStatisticsPanel = ({ electionDetails }) => {
    const chartData = electionDetails.candidates.map(candidate => ({
        name: candidate.firstname + ' ' + candidate.lastname,
        votes: candidate.voteCount,
        // color: candidate.partyColor, // Assuming you have party colors defined
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      }));
    
      return (
        <View style={styles.statisticsPanel}>
          <Text style={styles.statisticsTitle}>Election Results</Text>
          <PieChart
            data={chartData}
            width={styles.screenWidth}
            height={220}
            chartConfig={styles.chartConfig}
            accessor="votes"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute // Whether to show percentages or absolute values
          />
          {/* Include other statistics here */}
        </View>
      );
    };


const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
