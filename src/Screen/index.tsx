import * as Clipboard from "expo-clipboard";

import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Screens, state } from "../states/appState";
import { set, use } from "use-minimal-state";

import SubScreen from "./SubScreen";
import Toast from "react-native-root-toast";
import { addComma } from "../lib/addComma";
import { calculate } from "../lib/calculate";
import { parseNumber } from "../lib/parseNumber";

const Screen = () => {
  const activeScreen = use(state, "activeScreen");
  const screenValues = use(state, "screenValues");
  const resultValue = use(state, "resultValue");

  useEffect(() => {
    const v0 = parseNumber(screenValues[0]);
    const v1 = parseNumber(screenValues[1]);

    console.log(v0, v1);

    if (isNaN(v0) || isNaN(v1)) {
      set(state, "resultValue", "+0%");
      return;
    }

    let result = calculate(v0, v1);
    console.log(result);
    result = v0 < v1 ? Math.abs(result) : -Math.abs(result);

    let resString = result.toString();

    if (result % 1 != 0) {
      resString = result.toFixed(2);
    }

    resString = addComma(resString) + "%";

    if (result > -1) {
      resString = "+" + resString;
    }

    set(state, "resultValue", resString);
  }, screenValues);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <SubScreen
          value={screenValues[0] !== null ? addComma(screenValues[0]) : ""}
          label="From"
          isActive={activeScreen === Screens.Top}
          onPress={() => set(state, "activeScreen", Screens.Top)}
        />
        <SubScreen
          value={screenValues[1] !== null ? addComma(screenValues[1]) : ""}
          label="To"
          isActive={activeScreen === Screens.Bottom}
          onPress={() => set(state, "activeScreen", Screens.Bottom)}
        />
        <SubScreen
          label="Change"
          value={resultValue}
          isActive={false}
          color={resultValue.startsWith("-") ? "#F58283" : "#00D6C2"}
          onPress={() => {
            Clipboard.setString(resultValue);

            Toast.show("Copied!", {
              position: 40,
              duration: 1000,
              shadow: false,
            });
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen;
