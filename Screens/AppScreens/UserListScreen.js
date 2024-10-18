// screens/MyListsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const UserListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Lists Screen</Text>
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
