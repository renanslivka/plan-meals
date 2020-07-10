import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "./../screens/MealDetailScreen";
import CategoriesScreen from "../screens/CategoiesScreen";
import CustomHeaderButton from "./../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";
import { log } from "react-native-reanimated";

const Stack = createStackNavigator();

const MealsNavigator = (props) => {
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
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          headerTitle: "Meals Categories",
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
        component={CategoryMealsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        options={{
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="favorite"
                iconName={
                  props.route.state.routes[2].params.isFav
                    ? "ios-star"
                    : "ios-star-outline"
                }
                onPress={() => props.route.state.routes[2].params.toggleFav()}
              />
            </HeaderButtons>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigator;
