import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Form, Item, Input, Text, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

class ResetPass extends Component {

    state = {
      modalVisible: false
    };

    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }

    switchToLogin = () => {
        Actions.push('login')
      };
    
    verifyReset = () => {
        //alert("Email has been sent. If you cannot see it, check your spam")
        this.setModalVisible(true);
      };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Modal
          animationType= "slide"
          transparent= {true}
          presentationStyle="overFullScreen"
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Email has been sent.</Text>
              <Text style={styles.modalText}>If you cannot see it, check your spam</Text>
                <Button style={styles.modalBtn}
                    onPress={() => {
                      this.switchToLogin();
                      this.setModalVisible(!modalVisible);
                    }}>
                    <Text style={styles.btnText}>Back To Log In</Text>
                </Button>
                <Button style={styles.modalBtn}
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}>
                    <Text style={styles.btnText}>Resend Email</Text>
                </Button>
            </View>
          </View>
        </Modal>

        <View style={styles.middle}>
            <Text style={ styles.textContainer}> Reset Password </Text>
            <Text style={ styles.textContainer2}> Enter your email below </Text>
          <View style={styles.formArea}>
            <Form style={styles.mainForm}>
              <Item style={styles.formItems}>
                <Input placeholder="Knights Email" style={styles.Input} />
              </Item>
              <View style={styles.Button}>
                <Button block style={styles.mainBtn}
                    onPress={ this.verifyReset }>
                    <Text style={styles.btnText}>Reset</Text>
                </Button>
              </View>
              <View style={{ flexDirection: "row", alignSelf: "center"}}>
                <Text style={styles.subButton}>Log In</Text>
                <TouchableOpacity
                  onPress = { this.switchToLogin}>
                  <Text style={{...styles.subButton, fontFamily: "Poppins-Bold"}}> instead?</Text>
                </TouchableOpacity>
              </View>
            </Form>
          </View>
        </View>
      </View>
    );
  }
}

export default ResetPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  middle: {
    flex: 1,
    position: 'relative',
    paddingLeft: 26.3,
    paddingRight: 26.3,
    paddingTop: 50,
    justifyContent: 'center',
    backgroundColor: "#000000"
  },
  textContainer: {
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
    alignSelf: 'center',
  },
  textContainer2: {
    color: '#FCFDFF',
    fontFamily: 'Poppins-Italic',
    fontSize: 13,
    alignSelf: 'center',
    paddingBottom: 20
  },
  subTextContainer: {
    color: '#FCFDFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    position: 'relative',
    alignSelf: 'center',
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
    paddingBottom: 20,
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
    alignSelf: "center"
  },
  mainBtn: {
    backgroundColor: '#FFC107',
    borderRadius: 100,
    height: 30,
    alignContent: 'center'
  },
  modalBtn: {
    backgroundColor: '#FFC107',
    borderRadius: 100,
    height: 30,
    marginTop: 15,
    padding: 30
  },
  btnText: {
    color: '#2D3057',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    textAlignVertical: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#21252b',
    borderRadius: 20,
    padding: 35,
    marginTop: "57%",
    alignItems: "center",
    justifyContent: "center",
    height: "50%"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: '#ffffff'
  }
});
