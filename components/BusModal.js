import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class BusModal extends React.Component {
  render() {
    return (
      <Modal visible={this.props.modalVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            style={{
              width: 250,
              height: 300,
              backgroundColor: 'blue',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => this.props.setModal}
          ></TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
