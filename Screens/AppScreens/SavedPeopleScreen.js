// screens/SavedPeopleScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SavedPeopleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Saved People Screen</Text>
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
