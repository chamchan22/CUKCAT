import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { items } from '../constants/items';

export default class CalendarBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      locked: true
    };
  }
  render() {
    return (
      <Agenda
        items={items}
        onCalendarToggled={flag => {
          this.setState({ locked: flag });
          console.log(this.state.locked);
        }}
        minDate={'2019-09-01'}
        maxDate={'2019-12-31'}
        // monthFormat={'yyyy MM'}
        pastScrollRange={2}
        futureScrollRange={3}
        // loadItemsForMonth={this.loadItems.bind(this)}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
      />
    );
  }

  //   loadItems(day) {
  //     console.log(day);
  //     this.setState({
  //       items: items
  //     });
  //   }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: 90 }]}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>학사일정</Text>
          <Text
            style={{
              color: 'red'
            }}
          >
            PM 10:11
          </Text>
        </View>
        <Text>{item.title}</Text>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>Empty</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }
}

const styles = StyleSheet.create({
  calendar: {
    // borderTopWidth: 1,
    // paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 10
    // backgroundColor: 'blue'
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 25
  },
  emptyDate: {
    height: 15,
    flex: 1,
    marginTop: 30,
    backgroundColor: 'blue'
  }
});
