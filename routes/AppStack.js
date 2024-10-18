import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SavedListScreen,
  AddNewItemScreen,
  UserListScreen,
  SavedPeopleScreen,
  HomeScreen,
} from "../Screens/AppScreens";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();
const size = 40;
const color = "white";

export const AppRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#6200ee", // Active tab color
        tabBarInactiveTintColor: "#b0b0b0", // Inactive tab color
        headerShown: false, // Hide header to customize inside each screen
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SavedList"
        component={SavedListScreen}
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="MyLists"
        component={UserListScreen}
        options={{
          tabBarLabel: "My Lists",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SavedPeople"
        component={SavedPeopleScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
