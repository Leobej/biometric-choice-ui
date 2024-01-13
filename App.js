import { HomeScreen } from "./assets/components/screens/home/HomeScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUpScreen } from "./assets/components/screens/signUp/SignUpScreen";
import { LoginScreen } from "./assets/components/screens/login/LoginScreen";
import { VotingScreen } from "./assets/components/screens/voting/VotingScreen";
import { ElectionHistory } from "./assets/components/screens/voting/history-elections/ElectionHistory";
import { UserDashboard } from "./assets/components/screens/voting/UserDashboard";
import { VotingInformation } from "./assets/components/screens/voting/VotingInformation";
import { UpcomingElections } from "./assets/components/screens/voting/upcoming-elections/UpcomingElections";
import { UpcomingElectionDetailsScreen } from "./assets/components/screens/voting/upcoming-elections/UpcomingElectionDetailsScreen";
import { ElectionHistoryDetails } from "./assets/components/screens/voting/history-elections/ElectionHistoryDetails";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="VotingScreen" component={VotingScreen} />
          <Stack.Screen name="ElectionHistory" component={ElectionHistory} />
          <Stack.Screen name="UserDashboard" component={UserDashboard} />
          <Stack.Screen
            name="VotingInformation"
            component={VotingInformation}
          />
          <Stack.Screen
            name="UpcomingElections"
            component={UpcomingElections}
          />
          <Stack.Screen
            name="UpcomingElectionDetailsScreen"
            component={UpcomingElectionDetailsScreen}
          />
          <Stack.Screen
            name="ElectionHistoryDetails"
            component={ElectionHistoryDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
