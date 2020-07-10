import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from "../screens/FavoriteScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./../components/CustomHeaderButton";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const MealFavTabNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.accentColor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          headerTitle: "Favorites",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => props.navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name="CategoryMealsScreen"
        component={MealDetailScreen}
        /* options={({ route }) => ({ title: route.params.title })} */
      />
    </Stack.Navigator>
  );
};

export default MealFavTabNavigator;
