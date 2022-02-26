import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StyledButton from "./components/Button/StyledButton";
import Model from "./components/Car/ModelS";

export default function App() {
  return (
    <View style={styles.container}>
      <Model />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
