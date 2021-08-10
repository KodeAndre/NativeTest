import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Modal, Pressable } from 'react-native';

import StatusButton from "./components/statusButton"

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>It works lol</Text>
      <StatusButton />
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.text}>Show Modal</Text>
      </Pressable>
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text: {
    color: '#fff',
    margin: 20,
  },
  textStyle: {
    color: "#fff",
  },
  modalText: {
    textAlign: "center",
    marginBottom: 20,
    color: "#fff"
  }, 
  modalView: {
    top: 100,
    margin: 20,
    backgroundColor: "#faa",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    alignSelf: "center",
    justifyContent: "center",
  },
});
