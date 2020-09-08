import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function LogIn({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#567FED",
      }}
    >
      <Image style={styles.logo} source={require("../images/ST.png")} />
      <Text style={[styles.defaultStyle]}>Login</Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor="rgba(0,0,0,0.5)"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(0,0,0,0.5)"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Home Home")}
      >
        <Text style={styles.buttonText}> LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    // fontFamily: "GillSans-Bold",
    fontSize: 35,
    color: "#FFF",
    marginBottom: 75,
  },

  logo: {
    width: 200,
    height: 200,
    marginTop: 0,
    marginBottom: 40,
    marginTop: -170,
  },

  buttonContainer: {
    marginTop: 0,
    marginBottom: 25,
    width: 190,
    backgroundColor: "#fff",
    paddingVertical: 20,
    borderRadius: 10,
  },

  buttonText: {
    textAlign: "center",
    color: "#567FED",
    fontWeight: "900",
  },

  input: {
    height: 40,
    borderWidth: 3.5,
    borderColor: "#339CFF",
    backgroundColor: "rgba(255,255,255,1.3)",
    marginTop: 15,
    marginBottom: 30,
    color: "#FFF",
    paddingHorizontal: 100,
    textAlignVertical: "top",
    borderRadius: 10,
  },
});