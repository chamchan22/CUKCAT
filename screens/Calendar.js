import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { items } from '../constants/items';
import CalendarBlock from '../components/CalendarBlock';

export default class CalendarCUK extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <CalendarBlock />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
