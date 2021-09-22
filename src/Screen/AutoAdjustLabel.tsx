import React, { useState } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

interface Props {
  fontSize: number;
  text: string;
  style: StyleProp<TextStyle>;
  numberOfLines: number;
}

const AutoAdjustLabel = ({ fontSize, text, style, numberOfLines }: Props) => {
  const [currentFont, setCurrentFont] = useState(fontSize);

  return (
    <Text
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit
      style={[style, { fontSize: currentFont }]}
      onTextLayout={(e) => {
        const { lines } = e.nativeEvent;
        if (lines.length > numberOfLines) {
          setCurrentFont(currentFont - 1);
        }
      }}
    >
      {text}
    </Text>
  );
};

export default AutoAdjustLabel;
