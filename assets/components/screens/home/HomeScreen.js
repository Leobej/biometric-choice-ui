import { ImageBackground, View, StyleSheet } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    
    <ImageBackground
      source={require("../../images/HomeScreenImage.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            buttonColor="rgba(255, 0, 0, 0.2)"
            onPress={() => navigation.navigate("LoginScreen")}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            Login
          </Button>
          <Button
            mode="contained"
            buttonColor="rgba(0, 0, 255, 0.2)"
            onPress={() => navigation.navigate("SignUpScreen")}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            Sign Up
          </Button>
        </View>
      </View>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  buttonContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50%", // This will push the buttons above the middle
  },

  button: {
    marginTop: 20,
    width: "50%",
  },

  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },

  buttonText: {
    fontSize: 16,
  },
});
