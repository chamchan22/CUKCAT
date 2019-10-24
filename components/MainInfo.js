import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';
import ProgressCircle from 'react-native-progress-circle';
import * as WebBrowser from 'expo-web-browser';

const { width, height } = Dimensions.get('window');
let now = new Date();
let endDay = new Date(2019, 11, 13);

export default class MainInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dDay: null,
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
  componentDidMount() {
    this.setState({
      dDay: Math.floor(
        (endDay.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      )
    });
  }
  render() {
    return (
      <View style={styles.mainInfoContainer}>
        <View style={styles.dateCounterContainer}>
          <View style={styles.dateCounterRowTitle}>
            <FontAwesome
              name="bell"
              size={Math.floor(width * 0.046)}
              color="#FFD400"
            ></FontAwesome>
            <Text style={[styles.dateCounterTitle, { marginLeft: 5 }]}>
              종강까지
            </Text>
          </View>
          <ProgressCircle
            percent={(Math.floor(109 - this.state.dDay) / 109) * 100}
            radius={50}
            borderWidth={8}
            color="#0C2E86"
            shadowColor="#C6C6C6"
            bgColor="#FFF"
          >
            <Text
              style={{
                fontSize: Math.floor(width * 0.048),
                fontWeight: 'bold'
              }}
            >
              {this.state.dDay}일
            </Text>
          </ProgressCircle>
          <Text style={styles.dateCounterTitle}>남았어요</Text>
        </View>
        <View style={styles.quickLinkContainer}>
          <View style={styles.quickRowTable}>
            <TouchableOpacity style={styles.quickLinkBtn}>
              <MaterialIcons
                name="school"
                size={Math.floor(width * 0.09)}
                color="#5D7BBE"
              ></MaterialIcons>
              <Text
                style={[
                  styles.quickLinkTitle,
                  {
                    fontSize: Math.floor(width * 0.032),
                    color: '#5D7BBE'
                  }
                ]}
              >
                사이버캠퍼스
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickLinkBtn}>
              <FontAwesome
                name="id-card"
                size={Math.floor(width * 0.09)}
                color="#1AC7C3"
              ></FontAwesome>
              <Text
                style={[
                  styles.quickLinkTitle,
                  { fontSize: Math.floor(width * 0.033), color: '#1AC7C3' }
                ]}
              >
                트리니티
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.quickRowTable}>
            <TouchableOpacity
              style={styles.quickLinkBtn}
              onPress={() => this.props.openBusModal()}
            >
              <FontAwesome
                name="bus"
                size={Math.floor(width * 0.09)}
                color="#737373"
              ></FontAwesome>
              <Text
                style={[
                  styles.quickLinkTitle,
                  { fontSize: Math.floor(width * 0.033), color: '#737373' }
                ]}
              >
                버스정보
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickLinkBtn}
              onPress={() => this.props.openFoodModal()}
            >
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={Math.floor(width * 0.09)}
                color="#254392"
              ></MaterialCommunityIcons>
              <Text
                style={[
                  styles.quickLinkTitle,
                  { fontSize: Math.floor(width * 0.033), color: '#254392' }
                ]}
              >
                학식정보
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainInfoContainer: {
    flex: 1,
    height: Math.floor(width * 0.48),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
    flexDirection: 'row',
    padding: Math.floor(width * 0.05)
  },
  dateCounterContainer: {
    width: Math.floor(width * 0.432),
    height: Math.floor(width * 0.432),
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  dateCounterRowTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateCounterTitle: {
    fontSize: Math.floor(width * 0.045),
    fontWeight: 'bold',
    color: '#6A6A6A'
  },
  quickLinkContainer: {
    height: Math.floor(width * 0.432),
    justifyContent: 'space-between'
  },
  quickRowTable: {
    width: Math.floor(width * 0.442),
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  quickLinkBtn: {
    width: Math.floor(width * 0.208),
    height: Math.floor(width * 0.208),
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: '#FFF',
    paddingTop: Math.floor(width * 0.016),
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  quickLinkTitle: {
    fontWeight: 'bold'
  }
});
