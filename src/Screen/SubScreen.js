import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'


export default class SubScreen extends React.Component {

  render = () => {
    let ext_styles = StyleSheet.create({
      cntr: {
        borderRightColor: this.props.isActive ? '#9C89F8' : 'transparent'
      },
      value: {
        color: this.props.color
      }
    })

    return (
      <View style={StyleSheet.flatten([this.props.style, s.cntr, ext_styles.cntr])}>
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={s.content}>

          <View style={s.label}>
            <Text style={s.labelText}>{this.props.label}</Text>
          </View>

          <View style={s.value}>
            <Text
              style={StyleSheet.flatten([s.valueText, ext_styles.value])}
              value={this.props.value}
              autoCompleteType='off'
              keyboardType='decimal-pad'
            >{this.props.value}</Text>
          </View>

        </View>
      </TouchableWithoutFeedback>
      </View>
    )
  }

}

const s = StyleSheet.create({
  cntr: {
    padding: 10,
    borderRightWidth: 5,
    borderRightColor: 'transparent'
  },
  content: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  value: {
    flex: 1,
    alignSelf: 'stretch',
  },
  valueActive: {

  },
  valueText: {
    textAlign: 'right',
    flex: 1,
    fontSize: 56,
    fontWeight: '500',
    color: '#0E171E'
  },
  label: {
  },
  labelText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ccc'
  }
})