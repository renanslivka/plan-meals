import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import FiltersSwitch from "../components/FiltersSwitch";
import { useDispatch } from "react-redux";
import { setFilters } from "../redux/meals/meals.action";

const FiltesrScreen = (props) => {
  const { navigation } = props;

  const [isGluteinFree, setIsGluteinFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      gluteinFree: isGluteinFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilters(appliedFilters));
  }, [isGluteinFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
    console.log(props.route);
  }, [saveFilters]);

  return (
    <View style={styles.screen} saveFilters={saveFilters}>
      <Text style={styles.title}> Available Filters / Restrictions </Text>
      <FiltersSwitch
        label="Glutein-free"
        state={isGluteinFree}
        onChange={(newVal) => setIsGluteinFree(newVal)}
      />
      <FiltersSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newVal) => setIsLactoseFree(newVal)}
      />
      <FiltersSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newVal) => setIsVegetarian(newVal)}
      />
      <FiltersSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newVal) => setIsVegan(newVal)}
      />
    </View>
  );
};

export default FiltesrScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});
