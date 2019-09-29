import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';

const { width } = Dimensions.get('window');

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              'https://firebasestorage.googleapis.com/v0/b/cukcat-aacfa.appspot.com/o/dddd.png?alt=media&token=3b68ac2a-87f8-493d-8177-22abcad64e51'
          }}
        ></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EAEAEA'
  }
});
