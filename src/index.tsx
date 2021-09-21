import { StyleSheet, View } from 'react-native';

import Pad from './Pad';
import React from 'react';
import Screen from './Screen';

const Calculator = () => {
  return (
    <View style={styles.container}>
      <Screen />
      <Pad />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Calculator;
