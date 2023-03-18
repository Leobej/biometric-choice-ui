import { Button, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text>Sign In Screen</Text> */}
      <View style={styles.buttonContainer}>
        <Button
          title="Go back"
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
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
    marginTop: 100,

    justifyContent: "center",
    align: "center",
  },

  button: {
    flex: 1,
    width: "30%",
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
