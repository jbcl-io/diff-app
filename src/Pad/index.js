import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Button from './button';
import { connect } from 'react-redux';


class Pad extends React.Component {

  onButtonPress = type => {
    let payload = {};

    if (type != 'prev' && type != 'next') {
      payload.screen = this.props.app.screens.activeScreen
    }

    this.props.dispatch({
      type,
      payload
    });

    if (type == 'clear') this.props.dispatch({type: 'prev'})
  }

  render = () => {
    return (
      <View style={this.props.style}>
        <View style={s.cntr}>
          <SafeAreaView style={s.group1}>
            <View style={s.btnRow}>
              <Button style={s.group1Buttons} text='7' value={7} onPress={this.onButtonPress} />
              <Button style={s.group1Buttons} text='8' value={8} onPress={this.onButtonPress} />
              <Button style={s.group1Buttons} text='9' value={9} onPress={this.onButtonPress} />
            </View>
            <View style={s.btnRow}>
              <Button style={s.group1Buttons} text='4' value={4} onPress={this.onButtonPress} />
              <Button style={s.group1Buttons} text='5' value={5} onPress={this.onButtonPress} />
              <Button style={s.group1Buttons} text='6' value={6} onPress={this.onButtonPress} />
            </View>
            <View style={s.btnRow}>
              <Button style={s.group1Buttons} text='1' value={1} onPress={this.onButtonPress} />
              <Button style={s.group1Buttons} text='2' value={2} onPress={this.onButtonPress} />
              <Button style={s.group1Buttons} text='3' value={3} onPress={this.onButtonPress} />
            </View>
            <View style={s.btnRow}>
              <Button style={s.group1Buttons} text='0' value={0} onPress={this.onButtonPress} />
              <Button style={s.group1Buttons} text='.' value='dot' onPress={this.onButtonPress} />
              <Button style={s.group1Buttons} text='←' value='backspace' onPress={this.onButtonPress} />
            </View>
          </SafeAreaView>
          <SafeAreaView style={s.group2}>
            <View style={s.group2Btn}>
              <Button
                style={StyleSheet.flatten([s.group1Buttons])}
                text='C'
                value='clear'
                highlightColor='#FF3630'
                onPress={this.onButtonPress}
              />
              <Button
                style={s.group1Buttons}
                text='+/-'
                value='plusminus'
                highlightColor='#ae9ff5'
                onPress={this.onButtonPress}
              />
              <Button
                style={s.group1Buttons}
                text='↑'
                value='prev'
                highlightColor='#ae9ff5'
                onPress={this.onButtonPress}
              />
              <Button
                style={s.group1Buttons}
                text='↓'
                value='next'
                highlightColor='#ae9ff5'
                onPress={this.onButtonPress}
              />
            </View>
          </SafeAreaView>
        </View>
      </View>
    );
  }

}


const s = StyleSheet.create({
  cntr: {
    flexDirection: 'row',
    flex: 1
  },
  group1: {
    flex: 4,
    backgroundColor: '#312E43'
  },
  group2: {
    flex: 1,
    backgroundColor: '#9C89F8'
  },
  group1Buttons: {
    flex: 1,
  },
  group2Btn: {
    flex: 1
  },
  btnRow: {
    flexDirection: 'row',
    flex: 1
  },
  c_btn: {
    backgroundColor: '#7064AC'
  }
});

export default connect(s => ({app: s}))(Pad);