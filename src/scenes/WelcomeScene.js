import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Actions} from 'react-native-router-flux';

const data = [
    {
      title: 'Stay Connected',
      text: 'Stay up-to-date with upcoming GBMs,\nworkshops, social events, networking oppurtunities,\nand more!',
      image: require('../images/1.jpg'),
      bg: '#ffffff',
    },
    {
      title: 'Get Involved',
      text: 'Subscribe to committees, RSVP to events,\nvote in club elections, and keep track of your points \nas you rise through the leaderboard ranks!\n',
      image: require('../images/2.jpg'),
      bg: '#ffffff',
    },
    {
        //gif support in build.gradle
      title: 'Welcome to the Familia',
      text: "We're glad to have you join the SHPE UCF famila!\nWe can't wait to see you succeed alongside us.\n\n Now lets get you all set up. . .",
      image: require('../images/3.jpg'),
      bg: '#ffffff',
    },
  ];

class WelcomeScene extends Component {

  switchToRegistration = () => {
    Actions.push('register')
  };

  _renderItem = ({item}) => {
    return (
      <View
        style={[ styles.slide,
        {backgroundColor: item.bg,},
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item) => item.title;

  _renderPagination = (activeIndex) => {
    return (
      <View style={styles.paginationContainer}>
        <SafeAreaView>
          <View style={styles.paginationDots}>
            {data.length > 1 &&
              data.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.dot,
                    i === activeIndex
                      ? {backgroundColor: '#FFC107'}
                      : {backgroundColor: 'rgba(0, 0, 0, .2)'},
                  ]}
                  onPress={() => this.goToSlide(i, true)}
                />
              ))}
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
                onPress = { this.switchToRegistration }>
                <Text style={styles.buttonText}>Let's Go!</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          renderPagination={this._renderPagination}
          data={data}
        />
      </View>
    );
  }
}

export default  WelcomeScene;
  
  const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
      paddingBottom: 69 //nice
    },
    image: {
      width: 320,
      height: 320,
      marginVertical: 32,
      marginBottom: 50
    },
    text: {
      fontFamily: "Poppins-Light",
      color: '#000000',
      textAlign: 'center',
    },
    title: {
      fontFamily: "Poppins-Regular",
      fontSize: 22,
      color: '#000000',
      textAlign: 'center',
    },
    paginationContainer: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      right: 16,
    },
    paginationDots: {
      height: 50,
      margin: 16,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 4,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginHorizontal: 24,
    },
    button: {
      flex: 1,
      paddingVertical: 8,
      marginHorizontal: 8,
      borderRadius: 24,
      backgroundColor: '#FFC107',
    },
    buttonText: {
      fontFamily: "Poppins-Regular",
      color: '#ffffff',
      fontSize: 17,
      textAlign: 'center',
    },
  });
  