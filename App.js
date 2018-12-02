/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, View, TextInput} from 'react-native';
import { PlaceInput } from "src/PlaceInput";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = (value) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(value)
      }
    })
  }

  placeDeletedHandler = (index) => {

  }

  onSubmit = (value) => {
    alert('You entered ' + this.state.inputValue)
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
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
