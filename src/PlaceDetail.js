import React from 'react';
import { View, Modal, Button, StyleSheet, Image, Text } from 'react-native';

const placeDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace ? props.selectedPlace.image : null} style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace ? props.selectedPlace.value : null}</Text>
            </View>
        );
    } 
    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={() => props.onItemDeleted(props.selectedPlace.key)} />
                    <Button title="Close" onPress={props.onItemClosed}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin:22
  },
  placeImage: {
    marginRight:8,
    width:"100%",
    height: 200
  },
  placeName: {
    fontWeight:"bold",
    textAlign:"center",
    fontSize:28
  }
});

export default placeDetail;