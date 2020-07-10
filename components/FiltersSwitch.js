import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import Colors from "../constants/Colors";

const FiltesrSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.accentColor }}
        thumbColor={Colors.white}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

export default FiltesrSwitch;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    margin: 15,
  },
});
