import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Title from "./components/Title/Title";
import CarsList from "./components/CarsList/CarsList";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <CarsList />
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
