import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import BottomTabNav from './BottomTabNav';

const { height, width } = Dimensions.get('window');

const MainStackNav = createStackNavigator(
  {
    BottomTabNav: {
      screen: BottomTabNav,
      navigationOptions: () => ({
        header: null
      })
      // navigationOptions: () => ({
      //   headerTitle: (
      //     <View
      //       style={{
      //         height: Math.floor(height * 0.07), //실제 header 높이
      //         flex: 1,
      //         backgroundColor: '#FFF',
      //         justifyContent: 'center',
      //         flexDirection: 'row',
      //         alignItems: 'center'
      //       }}
      //     >
      //       <Text
      //         style={{
      //           color: '#0C2E86',
      //           fontSize: Math.floor(width * 0.053),
      //           fontWeight: 'bold',
      //           fontFamily: 'Roboto-Bold'
      //         }}
      //       >
      //         CUKCAT
      //       </Text>
      //     </View>
      //   ),
      //   headerStyle: {
      //     elevation: 0,
      //     shadowOpacity: 0,
      //     height: Math.floor(height * 0.07), // header가 들어갈 공간의 높이
      //     backgroundColor: '#EAEAEA'
      //   }
      // })
    }
  },
  {
    headerLayoutPreset: 'center'
  }
);

export default createAppContainer(MainStackNav);
