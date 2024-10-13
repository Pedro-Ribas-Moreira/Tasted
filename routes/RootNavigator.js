import React, { useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { StyleSheet, View, Text } from "react-native";

import { AppRoute } from "./AppStack";
import { AuthRoute } from "./AuthStack";

import { AuthenticatedUserContext } from "../providers";
import { auth } from "../config/firebase";

export const RootNavigator = () => {
  //   return (
  //     <NavigationContainer>
  //       <AppRoute />
  //     </NavigationContainer>
  //   );
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const { isLoading, setIsloading } = useState(true);
  useEffect(() => {
    const unsubscribeAuthStateChanged = onAuthStateChanged(
      auth,
      (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsloading(false);
      }
    );
    return unsubscribeAuthStateChanged;
  }, [user]);
  if (isLoading) {
    return (
      <View styles={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AppRoute /> : <AuthRoute />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
