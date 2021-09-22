import Button, { ButtonType } from './Button';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Screens, state } from '../states/appState';
import { set, use } from 'use-minimal-state/dist/index';

import React from 'react';

interface ButtonProps {
  text: string;
  id: string | number;
}

const primaryButtons: ButtonProps[][] = [
  [
    { text: '7', id: 7 },
    { text: '8', id: 8 },
    { text: '9', id: 9 },
  ],
  [
    { text: '4', id: 4 },
    { text: '5', id: 5 },
    { text: '6', id: 6 },
  ],
  [
    { text: '1', id: 1 },
    { text: '2', id: 2 },
    { text: '3', id: 3 },
  ],
  [
    { text: '0', id: 0 },
    { text: '.', id: 'dot' },
    { text: '←', id: 'backspace' },
  ],
];

const secondaryButtons: ButtonProps[][] = [
  [
    { text: 'C', id: 'clear' },
    { text: '+/-', id: 'plusMinus' },
    { text: '↑', id: 'prev' },
    { text: '↓', id: 'next' },
  ],
];

const Pad = () => {
  const activeScreen = use(state, 'activeScreen');
  const screenValues = use(state, 'screenValues');

  const getFocusedValue = (): string => {
    return activeScreen === Screens.Top ? screenValues[0] : screenValues[1];
  };

  const onPress = (buttonId: string | number) => {
    const oldValue = getFocusedValue();

    switch (buttonId) {
      case 'dot': {
        if (!oldValue.includes('.')) {
          const newValue = `${oldValue}.`;

          set(state, 'screenValues', [
            activeScreen === Screens.Top ? newValue : screenValues[0],
            activeScreen === Screens.Bottom ? newValue : screenValues[1],
          ]);
        }
        break;
      }

      case 'backspace': {
        const newValue = oldValue.length === 1 ? '' : oldValue.substr(0, oldValue.length - 1);

        set(state, 'screenValues', [
          activeScreen === Screens.Top ? newValue : screenValues[0],
          activeScreen === Screens.Bottom ? newValue : screenValues[1],
        ]);
        break;
      }

      case 'clear': {
        set(state, 'screenValues', ['', '']);
        set(state, 'activeScreen', Screens.Top);
        break;
      }

      case 'plusMinus': {
        const newValue = oldValue.includes('-') ? oldValue.replace('-', '') : `-${oldValue}`;

        set(state, 'screenValues', [
          activeScreen === Screens.Top ? newValue : screenValues[0],
          activeScreen === Screens.Bottom ? newValue : screenValues[1],
        ]);
        break;
      }

      case 'prev': {
        set(state, 'activeScreen', Screens.Top);
        break;
      }

      case 'next': {
        set(state, 'activeScreen', Screens.Bottom);
        break;
      }

      default: {
        if (typeof buttonId !== 'number') {
          throw Error(`buttonId ${buttonId} is not a number`);
        }

        const newValue = `${oldValue}${buttonId}`;

        set(state, 'screenValues', [
          activeScreen === Screens.Top ? newValue : screenValues[0],
          activeScreen === Screens.Bottom ? newValue : screenValues[1],
        ]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.group1}>
        {primaryButtons.map((buttons) => (
          <View key={buttons[0].id} style={styles.btnRow}>
            {buttons.map((button) => (
              <Button
                key={button.id}
                type={ButtonType.Primary}
                text={button.text}
                value={button.id}
                onPress={onPress}
              />
            ))}
          </View>
        ))}
      </SafeAreaView>
      <SafeAreaView style={styles.group2}>
        <View style={styles.btnColumn}>
          {secondaryButtons.map((buttons) => (
            <View key={buttons[0].id} style={styles.group2Btn}>
              {buttons.map((button) => (
                <Button
                  key={button.id}
                  type={ButtonType.Secondary}
                  text={button.text}
                  value={button.id}
                  onPress={onPress}
                />
              ))}
            </View>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  group1: {
    flex: 4,
    backgroundColor: '#312E43',
  },
  group2: {
    flex: 1,
    backgroundColor: '#9C89F8',
  },
  group1Buttons: {
    flex: 1,
  },
  group2Btn: {
    flex: 1,
  },
  btnRow: {
    flexDirection: 'row',
    flex: 1,
  },
  btnColumn: {
    flexDirection: 'row',
    flex: 1,
  },
  c_btn: {
    backgroundColor: '#7064AC',
  },
});

export default Pad;
