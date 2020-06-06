import React, { Component } from 'react';
import { 
    AppRegistry, 
    ScrollView, 
    Text, 
    View,
    StyleSheet,
    Animated,
    Dimensions } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SliderForm extends Component {

    constructor(props) {
        super(props);
        this.scroll = null;
        this.screenWidth = Dimensions.get('window').width;
        this.tempWidth = this.screenWidth
    }

    state = {
    welcomeText: new Animated.Value(0),
    };
    
    componentDidMount() {
        const {welcomeText} = this.state;
            Animated.timing(welcomeText, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: true,
            }).start();
    };

    switchToLogin = () => {
        Actions.push('login')
      };

    nextSlide = () => {
        console.log(this.screenWidth);
        this.scroll.scrollTo({x: this.tempWidth, y: 0, animated: false});
        this.tempWidth += this.screenWidth;
      };

      prevSlide = () => {
        this.tempWidth-= this.screenWidth;
        console.log(this.screenWidth);
        this.scroll.scrollTo({x: this.tempWidth, y: 0, animated: false});
      };
      
    render() { 
        return(
        <ScrollView style={styles.slide}
            ref={(scroll) => {this.scroll = scroll;}}
            horizontal= {true}  
            pagingEnabled= {true} 
            persistentScrollbar= {true}   
            scrollEnabled= {false}            
        >

            <View style={styles.container}>
                <Icon style={styles.backButton} name= "arrow-left-circle" size={30} onPress={this.switchToLogin}/>
                <View style = {styles.middle}>
                    <Animated.View style = {{ opacity: this.state.welcomeText }}>
                        <Text style = {styles.text}> Hello </Text>
                    </Animated.View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style = {styles.button} onPress = {this.nextSlide}>
                        <Text style={styles.buttonText}> Continue </Text> 
                    </Button>
                </View>
            </View>

            <View style={styles.container}>
                <Icon style={styles.backButton} name= "arrow-left-circle" size={30} onPress={this.prevSlide}/>
                <View style={styles.middle}>
                    <Text style = {styles.text}> Screen 2 </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style = {styles.button} onPress = {this.nextSlide}>
                        <Text style={styles.buttonText}> Continue </Text> 
                    </Button>
                </View>
            </View>

            <View style={styles.container}>
                <Icon style={styles.backButton} name= "arrow-left-circle" size={30} onPress={this.prevSlide}/>
                <View style={styles.middle}>
                    <Text style = {styles.text}> Screen 3 </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style = {styles.button} onPress = {this.nextSlide}>
                        <Text style={styles.buttonText}> Continue </Text> 
                    </Button>
                </View>
            </View>

            <View style={styles.container}>
                <Icon style={styles.backButton} name= "arrow-left-circle" size={30} onPress={this.prevSlide}/>
                <View style={styles.middle}>
                    <Text style = {styles.text}> Screen 4 </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style = {styles.button} onPress = {this.nextSlide}>
                        <Text style={styles.buttonText}> Continue </Text> 
                    </Button>
                </View>
            </View>

            <View style={styles.container}>
                <Icon style={styles.backButton} name= "arrow-left-circle" size={30} onPress={this.prevSlide}/>
                <View style={styles.middle}>
                    <Text style = {styles.text}> Screen 5 </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style = {styles.button} onPress = {this.nextSlide}>
                        <Text style={styles.buttonText}> Continue </Text> 
                    </Button>
                </View>
            </View>

            <View style={styles.container}>
                <Icon style={styles.backButton} name= "arrow-left-circle" size={30} onPress={this.prevSlide}/>
                <View style={styles.middle}>
                    <Text style = {styles.text}> Final Screen </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style = {styles.button} onPress = {this.switchToLogin}>
                        <Text style={styles.submit}> Submit </Text> 
                    </Button>
                </View>
            </View>

        </ScrollView>);        
    }
}

  export default SliderForm;

  const styles = StyleSheet.create({
    slide: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        marginTop: 20,   
        width: Dimensions.get('window').width,                                 
        justifyContent: 'center',
        alignItems: 'center',
      },
    middle: {
        flex: .9,
        marginTop: 20, 
        width: Dimensions.get('window').width,                                 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      },
    text: {
        fontFamily: "Poppins-Regular",
        fontSize: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        flex: 0.11,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    button: {
        borderRadius: 100,
        backgroundColor: '#FFC107',
    },
    buttonText: {
        fontFamily: "Poppins-Regular",
        color: '#ffffff',
        fontSize: 17,
        textAlign: 'center',
        paddingHorizontal: 120
    },
    submit: {
        fontFamily: "Poppins-Regular",
        color: '#ffffff',
        fontSize: 17,
        textAlign: 'center',
        paddingHorizontal: 129
    },
    backButton: {
        alignSelf: 'flex-start',
        marginLeft: 15
    },
  });