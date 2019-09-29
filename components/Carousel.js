import * as React from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
const { width, height } = Dimensions.get('window');
const carouselHeight = height * 0.4;

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1
              ? 0
              : prev.selectedIndex + 1
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x:
              (width - Math.floor(width * 0.03) * 2) * this.state.selectedIndex,
            y: 0
          });
        }
      );
    }, 5000);
  };

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ selectedIndex });
  };
  _handlePressButtonAsync = async url => {
    await WebBrowser.openBrowserAsync(url);
  };
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <TouchableOpacity
          style={styles.carouselContainer}
          onPress={() => this._handlePressButtonAsync('https://www.naver.com/')}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={this.setSelectedIndex}
            ref={this.scrollRef}
          >
            {images.map(image => (
              <Image
                style={styles.carouselImage}
                source={{ uri: image.source }}
                key={image.key}
              />
            ))}
          </ScrollView>
          <View style={styles.carouselIndicator}>
            {images.map((image, i) => (
              <View
                key={image.key}
                style={[
                  styles.circleIndicator,
                  { opacity: i === this.state.selectedIndex ? 1 : 0.5 }
                ]}
              />
            ))}
          </View>
        </TouchableOpacity>
      );
    }
    console.log('Please provide images');
    return null;
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1
  },
  carouselImage: {
    width: width - Math.floor(width * 0.03) * 2,
    height: '100%'
  },
  carouselIndicator: {
    position: 'absolute',
    width: '100%',
    bottom: 15,
    height: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: '#FFF'
  }
});
