import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FilterNavigator from "./FilterNavigator";
import TabNavigator from "./TabNavigator";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: { fontFamily: "open-sans-bold" },
      }}
    >
      <Drawer.Screen name="Meals" component={TabNavigator} />
      <Drawer.Screen name="Filtres" component={FilterNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
