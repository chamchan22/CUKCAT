import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import {
  mainLink,
  libraryLink,
  dormitoryLink,
  haksaLink
} from '../constants/links';

const { width, height } = Dimensions.get('window');

export default class LinkTable extends React.Component {
  constructor(props) {
    super(props);
  }
  _handlePressButtonAsync = async url => {
    await WebBrowser.openBrowserAsync(url);
  };
  rederRowTable(linkRow, index) {
    return (
      <View style={styles.rowTable} key={index}>
        {linkRow.map((link, index) => (
          <TouchableOpacity
            style={styles.linkArea}
            key={index}
            onPress={() => this._handlePressButtonAsync(link.url)}
          >
            <View style={[styles.linkBtn, { backgroundColor: link.color }]}>
              <FontAwesome
                name={link.icon}
                color="#FFF"
                size={Math.floor(width * 0.1)} //Done
              ></FontAwesome>
            </View>
            <Text style={styles.linkText}>{link.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        snapToAlignment={'center'}
        snapToInterval={Math.floor(width * 0.825)}
        decelerationRate={'fast'}
      >
        <View style={[styles.linkTableContainer]}>
          <Text style={styles.linkTableTitle}>홈</Text>
          {mainLink.map((linkRow, index) => this.rederRowTable(linkRow, index))}
        </View>

        <View style={styles.linkTableContainer}>
          <Text style={styles.linkTableTitle}>학사</Text>
          {haksaLink.map((linkRow, index) =>
            this.rederRowTable(linkRow, index)
          )}
        </View>

        <View style={styles.linkTableContainer}>
          <Text style={styles.linkTableTitle}>도서관</Text>
          {libraryLink.map((linkRow, index) =>
            this.rederRowTable(linkRow, index)
          )}
        </View>

        <View
          style={[
            styles.linkTableContainer,
            { marginRight: Math.floor(width * 0.05) }
          ]}
        >
          <Text style={styles.linkTableTitle}>기숙사</Text>
          {dormitoryLink.map((linkRow, index) =>
            this.rederRowTable(linkRow, index)
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  linkTableContainer: {
    height: Math.floor(width * 0.99), //Done
    marginTop: Math.floor(width * 0.05), //Done
    marginBottom: Math.floor(width * 0.05), //Done
    marginLeft: Math.floor(width * 0.05), //Done
    justifyContent: 'flex-start',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  rowTable: {
    flexDirection: 'row',
    paddingTop: Math.floor(width * 0.06), //Done
    width: Math.floor(width * 0.8), //Done
    justifyContent: 'flex-start'
  },
  linkArea: {
    width: Math.floor(width * 0.16), //Done
    height: Math.floor(width * 0.2), //Done
    marginLeft: (Math.floor(width * 0.8) - Math.floor(width * 0.16) * 3) / 4, //Done
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkBtn: {
    width: Math.floor(width * 0.15), //Done
    height: Math.floor(width * 0.15), //Done
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Math.floor(width * 0.15) //Done
  },
  linkText: {
    paddingTop: Math.floor(width * 0.018), //Done
    fontSize: Math.floor(width * 0.029), //Done
    color: '#656565',
    fontWeight: 'bold'
  },
  linkTableTitle: {
    fontSize: Math.floor(width * 0.05), //Done
    height: Math.floor(width * 0.13), //Done
    width: Math.floor(width * 0.7), //Done
    fontWeight: 'bold',
    padding: Math.floor(width * 0.028), //Done
    paddingTop: Math.floor(width * 0.05), //Done
    color: '#6A6A6A',
    borderBottomWidth: 1,
    borderBottomColor: '#6A6A6A'
  }
});
