// screens/AddNewScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const AddNewItemScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add New Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
