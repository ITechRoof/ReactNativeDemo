import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PlaceList from '../../PlaceList';
import { connect } from 'react-redux';

class FindPlace extends Component {
  render() {
    return (
      <View>
        <PlaceList places={this.props.places}/>
      </View>
    )
  }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
};

export default connect(mapStateToProps)(FindPlace);