import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

const { width } = Dimensions.get('window');

export default class BusBtnTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busUrl: {
        fromStation:
          'http://m.gbis.go.kr/search/StationArrivalViaList.do?stationId=210000416&districtCd=2&mobileNo=11406&mobileNoSi=&regionName=%EB%B6%80%EC%B2%9C&stationName=%EC%97%AD%EA%B3%A1%EC%97%AD%EB%B6%81%EB%B6%80&x=126.8116&y=37.4856167&osInfoType=M',
        fromSchool:
          'http://m.gbis.go.kr/search/StationArrivalViaList.do?stationId=210000422&districtCd=2&mobileNo=11426&mobileNoSi=&regionName=%EB%B6%80%EC%B2%9C&stationName=%EA%B0%80%ED%86%A8%EB%A6%AD%EB%8C%80%ED%95%99%EA%B5%90%EC%A0%95%EB%AC%B8&x=126.8048667&y=37.4855667&osInfoType=M'
      }
    };
  }
  _handlePressButtonAsync = async url => {
    await WebBrowser.openBrowserAsync(url);
  };
  render() {
    return (
      <View style={styles.busBtnTableContainer}>
        <TouchableOpacity
          style={[styles.busBtn, { borderColor: '#5D7BBE' }]}
          onPress={() =>
            this._handlePressButtonAsync(this.state.busUrl.fromStation)
          }
        >
          <FontAwesome
            name="bus"
            size={Math.floor(width * 0.13)}
            color="#5D7BBE"
          ></FontAwesome>
          <Text style={[styles.busBtnText, { color: '#5D7BBE' }]}>
            역곡역 → 학교
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.busBtn, { borderColor: '#1AC7C3' }]}
          onPress={() =>
            this._handlePressButtonAsync(this.state.busUrl.fromSchool)
          }
        >
          <FontAwesome
            name="bus"
            size={Math.floor(width * 0.13)}
            color="#1AC7C3"
          ></FontAwesome>
          <Text style={[styles.busBtnText, { color: '#1AC7C3' }]}>
            학교 → 역곡역
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  busBtnTableContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  busBtn: {
    width: Math.floor(width * 0.32),
    height: Math.floor(width * 0.32),
    paddingTop: Math.floor(width * 0.016),
    borderRadius: 35,
    borderWidth: Math.floor(width * 0.02),
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  busBtnText: {
    fontSize: Math.floor(width * 0.04),
    fontWeight: 'bold'
  }
});
