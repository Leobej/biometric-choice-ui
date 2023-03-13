import { ImageBackground, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../images/HomeScreenImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.buttonContainer}>
          <Button title="Login" style={styles.button}></Button>
          <Button
            title="Sign Up"
            style={styles.button}
            onPress={() => navigation.navigate("SignInScreen")}
          ></Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "10%",
    width: "100%",
  },

  button: {
    flex:1,
    width: "20%",
    height: 20,
    margin: 10,
  },

  coloredText: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },

  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },

  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },

  textInput: {
    borderWidth: 1,
    color: "black",
    backgroundColor: "white",
    borderColor: "white",
    width: "100%",
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
  },
});
