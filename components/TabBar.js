import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const tabBarIcon = ['home', 'bell', 'calendar-o', 'building-o'];
const tabBarLabel = ['홈', '공지', '캘린더', '이벤트'];

const { width, height } = Dimensions.get('window');

const tabBarHeight = Math.floor(height / 10);
const fontSize = Math.floor(tabBarHeight / 6);
const iconSize = Math.floor(tabBarHeight / 3);

const TabBar = props => {
  const { onTabPress, activeTintColor, inactiveTintColor } = props;
  const { routes, index } = props.navigation.state;
  return (
    <View style={styles.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === index;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
        return (
          <TouchableOpacity
            key={routeIndex}
            style={styles.tabButton}
            onPress={() => onTabPress({ route })}
          >
            <FontAwesome
              name={tabBarIcon[routeIndex]}
              color={tintColor}
              size={iconSize}
            />
            <Text
              style={{
                color: tintColor,
                fontSize,
                fontFamily: 'Roboto-Medium'
              }}
            >
              {tabBarLabel[routeIndex]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: tabBarHeight,
    borderTopWidth: 1,
    borderTopColor: '#D6D6D6',
    backgroundColor: '#FFF'
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Math.floor(width * 0.01)
  }
});

export default TabBar;
