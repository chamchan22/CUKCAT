import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import _ from 'underscore';
import NoticeList from '../components/NoticeList';

export default class Notice extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NoticeList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});
