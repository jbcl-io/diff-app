import React from 'react'
import { View, StyleSheet, SafeAreaView, Clipboard } from 'react-native'
import SubScreen from './SubScreen'
import { connect } from 'react-redux'
import func from '../func'
import Toast from 'react-native-root-toast'


class Screen extends React.Component {

  v1 = 0
  v2 = 0

  calculate = () => {
    this.v1 = Number(this.props.app.sub_screens.screen0.value)
    this.v2 = Number(this.props.app.sub_screens.screen1.value)

    if (this.v1.toString().length == 0 || this.v2.toString().length == 0) {
      return 0
    }

    return ((this.v2 - this.v1) / this.v1) * 100
  }

  render = () => {
    let change = this.calculate()
    change = this.v1 < this.v2 ? Math.abs(change) : -Math.abs(change)
    if (change % 1 != 0) change = change.toFixed(2)
    if (isNaN(change) || !isFinite(change)) change = 0
    let change_text = func.comma(change) + '%'
    if (change > -1) change_text = '+' + change_text

    return (
      <View style={this.props.style}>
        <SafeAreaView style={s.cntr} >
          <SubScreen
            style={s.subScreen}
            value={func.comma(this.props.app.sub_screens.screen0.value)}
            color='#312E43'
            label='From'
            isActive={this.props.app.screens.activeScreen === 0}
            onPress={() => {
              this.props.dispatch({
                type: 'set_screen',
                payload: 0
              });
            }}
          />
          <SubScreen
            style={s.subScreen}
            value={func.comma(this.props.app.sub_screens.screen1.value)}
            color='#312E43'
            label='To'
            isActive={this.props.app.screens.activeScreen === 1}
            onPress={() => {
              this.props.dispatch({
                type: 'set_screen',
                payload: 1
              });
            }}
          />
          <SubScreen
            style={s.subScreen}
            value={change_text}
            color={change < 0 ? '#F58283' : '#00D6C2'}
            label='Change'
            onPress={() => {
              Clipboard.setString(change_text)

              Toast.show('Copied!', {
                position: 40,
                duration: 1000,
                shadow: false
              })
            }}
          />
        </SafeAreaView>
      </View>
    )
  }

}

const s = StyleSheet.create({
  cntr: {
    flex: 1,
  },
  subScreen: {
    flex: 1
  }
})

export default connect(s => ({app: s}))(Screen);