import { StyleSheet, Text, TouchableHighlight } from 'react-native';

import React from 'react';

export const enum ButtonType {
  Primary = 0,
  Secondary = 1,
}

export interface Props {
  type: ButtonType;
  text: string;
  value: string | number;
  onPress: (value: string | number) => void;
}

const Button = (props: Props) => {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => props.onPress(props.value)}
      underlayColor={props.type === ButtonType.Primary ? '#413C56' : '#ae9ff5'}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: '300',
    color: '#ffffff',
  },
});

export default Button;
