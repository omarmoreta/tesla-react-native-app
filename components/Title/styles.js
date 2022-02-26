import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    top: 50,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

export default styles;
