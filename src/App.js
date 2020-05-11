import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

/**
 * Components for routes
 */
import LoadingScene from './scenes/LoadingScene';
import WelcomeScene from './scenes/WelcomeScene';
import RegistrationForm from './scenes/RegistrationForm';
import LoginScene from './scenes/LoginScene';
import ResetPass from './scenes/ResetPass';

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="loading" component={LoadingScene} initial={true} hideNavBar={true}></Scene>
          <Scene key="welcome" component={WelcomeScene}hideNavBar={true}></Scene>
          <Scene key="register" component={RegistrationForm}hideNavBar={true}></Scene>
          <Scene key="login" component={LoginScene} hideNavBar={true}></Scene>
          <Scene key="reset" component={ResetPass} hideNavBar={true}></Scene>
          {/* <Scene key="registration" component={RegistrationForm}></Scene> */}
        </Scene>
      </Router>
    );
  }
}

export default App;
