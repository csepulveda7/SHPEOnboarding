import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {Form, Item, Input, Text, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

class LoginScene extends Component {

  switchToReset = () => {
    Actions.push('reset')
  };

  switchToRegistration = () => {
    Actions.push('register')
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Image style={styles.logoStyle} source={require('../images/Logo.png')}/>
          <Text style={styles.textContainer}>SHPE<Text style={styles.textContainer2}>UCF</Text></Text>
          <Text style={styles.subTextContainer} 
          adjustsFontSizeToFit={true} 
           numberOfLines={2}>Society of Hispanic Professional Engineers</Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.formArea}>
            <Form style={styles.mainForm}>
              <Item style={styles.formItems}>
                <Input placeholder="Knights Email" style={styles.Input} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Password" style={styles.Input} />
              </Item>
              <View style={styles.Button}>
                <Button block style={styles.mainBtn}>
                  <Text style={styles.btnText}>Login</Text>
                </Button>
              </View>
              <View>
                <TouchableOpacity
                  onPress = { this.switchToReset }>
                  <Text style={styles.subButton}>Forgot Password?</Text>
                  </TouchableOpacity>
              </View>
            </Form>
          </View>
          <View style={styles.Button}>
            <Text style={ styles.subButton}>
              Don't have an account?
            </Text>
                <Button block style={styles.mainBtn}
                  onPress={this.switchToRegistration}>
                  <Text style={styles.btnText}>Register</Text>
                </Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  top: {
    flex: .7,
    position: 'relative',
    backgroundColor: '#FFC107',
  },
  middle: {
    flex: 1,
    position: 'relative',
    paddingLeft: 26.3,
    paddingRight: 26.3,
    paddingTop: 35,
    backgroundColor: "#000000"
  },
  textContainer: {
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    fontSize: 45,
    textAlign: 'center',
    flex: 1
  },
  textContainer2: {
    color: '#ffffff',
    fontSize: 45,
    textAlign: 'center',
    flex: 1
  },
  subTextContainer: {
    color: '#FCFDFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    position: 'relative',
    textAlign: 'center',
    flex: 0.8
  },
  logoStyle: {
    alignSelf: 'center',
    height: 150,
    width: 200,
    marginTop: 20
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#21252b',
    borderRadius: 10,
    paddingBottom: 15,
  },
  formItems: {
    paddingTop: 20,
    borderBottomColor: '#E0E6ED',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 20
  },
  Input: {
    fontFamily: 'Poppins-light',
    fontSize: 15,
    color: 'white'
  },
  Button: {
    padding: 30,
    alignItems: "center"
  },
  subButton: {
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    alignSelf: "center",
    paddingBottom: 2
  },
  mainBtn: {
    backgroundColor: '#FFC107',
    borderRadius: 100,
    alignContent: 'center'
  },
  btnText: {
    color: '#2D3057',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});
