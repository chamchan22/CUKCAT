import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Modal,
  Text,
  TouchableOpacity
} from 'react-native';
import MainInfo from '../components/MainInfo';
import LinkTable from '../components/LinkTable';
import Carousel from '../components/Carousel';
import ProgressCircle from 'react-native-progress-circle';
import * as WebBrowser from 'expo-web-browser';
import BusModal from '../components/BusModal';

const { width } = Dimensions.get('window');
let now = new Date();
let endDay = new Date(2019, 11, 13);

const images = [
  {
    key: 1,
    source:
      'https://firebasestorage.googleapis.com/v0/b/cukcat-aacfa.appspot.com/o/dddd.png?alt=media&token=3b68ac2a-87f8-493d-8177-22abcad64e51'
  },
  {
    key: 2,
    source:
      'http://mblogthumb4.phinf.naver.net/MjAxNzAxMjVfMjYz/MDAxNDg1MzQ5NjIxMDk2.LoOsq-oSKIn8NXlulM_4-IiNogTFTTZCwMiOCy1e154g.m7bYXYxlfqBvg9VM1MHqzaWqf1elVpakw_sJYZ5_c4gg.PNG.oyaubihime/025Pikachu_OS_anime_11.png?type=w800'
  },
  {
    key: 3,
    source:
      'https://firebasestorage.googleapis.com/v0/b/cukcat-aacfa.appspot.com/o/dddd.png?alt=media&token=3b68ac2a-87f8-493d-8177-22abcad64e51'
  }
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dDay: null,
      busUrl: {
        fromStation:
          'http://m.gbis.go.kr/search/StationArrivalViaList.do?stationId=210000416&districtCd=2&mobileNo=11406&mobileNoSi=&regionName=%EB%B6%80%EC%B2%9C&stationName=%EC%97%AD%EA%B3%A1%EC%97%AD%EB%B6%81%EB%B6%80&x=126.8116&y=37.4856167&osInfoType=M',
        fromSchool:
          'http://m.gbis.go.kr/search/StationArrivalViaList.do?stationId=210000422&districtCd=2&mobileNo=11426&mobileNoSi=&regionName=%EB%B6%80%EC%B2%9C&stationName=%EA%B0%80%ED%86%A8%EB%A6%AD%EB%8C%80%ED%95%99%EA%B5%90%EC%A0%95%EB%AC%B8&x=126.8048667&y=37.4855667&osInfoType=M'
      },
      modalVisible: false
    };
  }
  _handlePressButtonAsync = async url => {
    await WebBrowser.openBrowserAsync(url);
  };
  showBusModal() {
    this.setState({
      modalVisible: true
    });
  }
  componentDidMount() {
    this.setState({
      dDay: Math.floor(
        (endDay.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      )
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BusModal
            modalVisible={this.state.modalVisible}
            setModal={() => this.setModal()}
          />
          <View
            style={{
              flex: 1,
              height: 90,
              backgroundColor: '#575B65',
              margin: 10,
              borderRadius: 15
            }}
          >
            <Carousel images={images}></Carousel>
          </View>
          <MainInfo setModal={() => this.setModal()} />
          <LinkTable />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FBFBFB'
  },
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
