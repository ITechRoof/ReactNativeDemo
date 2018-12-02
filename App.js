/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import PlaceInput from "./src/PlaceInput";
import PlaceList from "./src/PlaceList";
import placeImage from "./src/assets/download.jpeg";
import PlaceDetail from "./src/PlaceDetail";

// type Props = {};
export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(), 
          value : placeName,
          image: {
            uri: "https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg"
          }
        })
      }
    })
  }

  placeDeletedHandler = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return key !== place.key;
        }),
        selectedPlace: null
      }
    })
  }

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return key === place.key;
        })
      };
    });
  }

  modelClosedHandler = (key) => {
    this.setState({
      selectedPlace : null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onItemClosed={this.modelClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
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
