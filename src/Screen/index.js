import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import SubScreen from './SubScreen';
import { connect } from 'react-redux';


class Screen extends React.Component {

  calculate = () => {
    let v1 = this.props.app.sub_screens.screen0.value
    let v2 = this.props.app.sub_screens.screen1.value

    if (v1.length == 0 || v2.length == 0) return 0;

    return ((Number(v2) - Number(v1)) / Number(v1)) * 100
  }


  render = () => {
    let change = this.calculate()
    if (change % 1 != 0) change = change.toFixed(2)
    if (isNaN(change) || !isFinite(change)) change = 0
    let change_text = `${change}%`
    if (change > -1) change_text = '+' + change_text

    return (
      <View style={this.props.style}>
        <SafeAreaView style={s.cntr} >
          <SubScreen
            style={s.subScreen}
            value={this.props.app.sub_screens.screen0.value}
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
            value={this.props.app.sub_screens.screen1.value}
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