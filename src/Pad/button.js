import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class Button extends React.Component {

  onPress = () => {
    if (typeof this.props.onPress == 'function') this.props.onPress(this.props.value)
  }

  render = () => {
    return (
      <TouchableHighlight
        style={StyleSheet.flatten([this.props.style, s.cntr])}
        onPress={this.onPress}
        underlayColor={this.props.highlightColor || '#413C56'}
      >
        <Text style={s.text}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }

}

const s = StyleSheet.create({
  cntr: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: '300',
    color: '#ffffff'
  }
});