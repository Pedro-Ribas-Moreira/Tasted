// App.js
import React, { useState } from "react";
import { View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login success
        const user = userCredential.user;
        Alert.alert("Login Successful", `Welcome ${user.email}!`);
        setLoading(false);
      })
      .catch((error) => {
        // Error handling
        Alert.alert("Login Failed", error.message);
        setLoading(false);
      });
  };

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email to reset the password.");
      return;
    }
    auth
      .sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert(
          "Password Reset",
          "Check your email to reset your password."
        );
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={handleLogin}
        loading={loading}
        style={styles.button}
      >
        Login
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
  registerText: {
    marginTop: 20,
    textAlign: "center",
    color: "#6200ee", // Paper's primary color
  },
  forgotText: {
    marginTop: 10,
    textAlign: "center",
    color: "#6200ee",
  },
});
