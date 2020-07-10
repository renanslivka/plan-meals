import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealsNavigator from "./MealsNavigator";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Colors from "../constants/Colors";
import MealFavTabNavigator from "./MealFavTabNavigator";

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor={Colors.black}
      barStyle={{ backgroundColor: Colors.accentColor }}
      shifting={true}
    >
      <Tab.Screen
        name="MealsNavigator"
        component={MealsNavigator}
        options={{
          tabBarLabel: "Meals",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-restaurant" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={MealFavTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-star" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
