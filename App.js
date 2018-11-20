/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, View, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  state = {
    inputValue:""
  };

  onChangeHandler = (value) => {
    this.setState({
      inputValue: value
    });
  }

  onSubmit = (value) => {
    alert('You entered ' + this.state.inputValue)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={{width: 300, borderColor: "gray", borderWidth: 1, height: 50}}
          value={this.state.inputValue}
          placeholder='Placeholder'
          onChangeText={this.onChangeHandler}/>
        <Button title='Show entered input' onPress={this.onSubmit}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding:50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
