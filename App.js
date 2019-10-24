import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import AppNavigator from './navigation/MainStackNav';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Constants from 'expo-constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto-Bold': require('./assets/font/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./assets/font/Roboto-Medium.ttf')
    });
    this.setState({ isReady: true });
  }
  render() {
    let marginTop = Platform.OS === 'android' ? 0 : Constants.statusBarHeight;

    // let marginTop = 0;
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <View style={[styles.container, { marginTop }]}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA'
  }
});
