import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'


const listItem = props => (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    listItem: {
      width: "100%",
      marginBottom: 5,
      padding: 10,
      backgroundColor: "#eee"
    }
  });
  
  export default listItem;
  