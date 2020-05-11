import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
  Dimensions,
  StatusBar
} from 'react-native';

import {Actions} from 'react-native-router-flux';

/* Logo */
import Logo from '../images/Logo.png';

const switchToWelcome = () => {
  Actions.push('welcome')
};

class LoadingScene extends Component {
  state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
  };

  componentDidMount() {
    const {LogoAnime, LogoText} = this.state;
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 3,
        duration: 2000,
        useNativeDriver: true,
      }).start(),

      Animated.timing(LogoText, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(switchToWelcome, 1500);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Animated.View
          style={{
            translateY: this.state.LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0],
            }),
          }}>
          <Image style={styles.logoStyle}
            source={Logo}
          />
        </Animated.View>
        <Animated.View style={{opacity: this.state.LogoText}}>
          <Text style={styles.logoText}> Bienvenidos </Text>
        </Animated.View>
      </View>
    );
  }
}

export default LoadingScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Light',
    fontSize: 30,
    marginTop: 5,
    fontWeight: '300',
  },

  logoStyle: {
    height: 300,
    width: 300
  },
});
