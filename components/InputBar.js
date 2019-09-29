import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default class InputBar extends React.Component {
  render() {
    return (
      <View style={styles.inputBarContainer}>
        <FontAwesome
          name="search"
          size={Math.floor(width * 0.06)}
          color="#FFB549"
        ></FontAwesome>
        <View
          style={{
            width: Math.floor(width * 0.75),
            backgroundColor: '#DEDEDE',
            borderRadius: 25
          }}
        ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBarContainer: {
    width: width * 0.85,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    marginBottom: 10
  }
});
