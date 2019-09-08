import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Screen from './Screen';
import Pad from './Pad';


export default class Calculator extends React.Component {

  render = () => {
    return (
      <View style={s.cntr}>
        <Screen style={s.screen} />
        <Pad style={s.pad} />
      </View>
    );
  }

}

const s = StyleSheet.create({
  cntr: {
    flex: 1
  },
  screen: {
    flex: 1
  },
  pad: {
    flex: 1,
  }
})
