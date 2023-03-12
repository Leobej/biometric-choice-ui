import { ImageBackground, View, StyleSheet, Text, Button } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../images/HomeScreenImage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View>
          <Button title="Login"></Button>
          <Button title="Sign Up"></Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },

  button: {
    width: "30%",
    marginHorizontal: 8,
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
  },
});
