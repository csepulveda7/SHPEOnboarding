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
import {Actions} from 'react-native-router-flux';
import SliderForm from '../components/SliderForm';

class RegistrationForm extends Component {
    
  

  switchToLogin = () => {
    Actions.push('login')
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <SliderForm/>
      </View>
    );
  }
}

export default  RegistrationForm;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
  });
  