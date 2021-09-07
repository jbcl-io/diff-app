import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import React from "react";

interface Props {
  label: string;
  value: string;
  isActive: boolean;
  color?: string;
  onPress: () => void;
}

const SubScreen = (props: Props) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        props.isActive ? styles.activeContainer : null,
      ])}
    >
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={styles.content}>
          <View>
            <Text style={styles.labelText}>{props.label}</Text>
          </View>

          <View style={styles.valueContainer}>
            <Text
              style={StyleSheet.flatten([
                styles.valueText,
                props.color ? { color: props.color } : null,
              ])}
            >
              {props.value}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRightWidth: 5,
    borderRightColor: "transparent",
  },
  activeContainer: {
    borderRightColor: "#9C89F8",
  },
  content: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "column",
  },
  valueContainer: {
    flex: 1,
    alignSelf: "stretch",
    color: "#9C89F8",
  },
  valueText: {
    textAlign: "right",
    flex: 1,
    fontSize: 56,
    fontWeight: "500",
    color: "#0E171E",
  },
  labelText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ccc",
  },
});

export default SubScreen;
