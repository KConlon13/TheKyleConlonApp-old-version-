import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { Header, Avatar, Button, Icon, ButtonGroup } from 'react-native-elements';
import AboutMeScreen from "./AboutMeScreen"
import WelcomeScreen from "./WelcomeScreen"
import MyProjectsScreen from "./MyProjectsScreen"

export default class App extends React.Component {
  state = {
    welcomeScreen: true,
    aboutMeScreen: false,
    myProjectsScreen: false,
  }

  welcomeButtonHandler(){
    this.setState({welcomeScreen: true, aboutMeScreen: false, myProjectsScreen: false})
  }
  aboutMeButtonHandler(){
    this.setState({welcomeScreen: false, aboutMeScreen: true, myProjectsScreen: false})
  }
  myProjectsButtonHandler(){
    this.setState({welcomeScreen: false, aboutMeScreen: false, myProjectsScreen: true})
  }

  render(){
      return (
        <View>
          {this.state.aboutMeScreen === true ?           
          <Header
            backgroundColor="#31CCC8" 
            centerComponent={{text: 'ABOUT ME', onPress: ()=>this.aboutMeButtonHandler(), style: {color: 'white', fontSize: 18, fontFamily: "Futura"}}}
            rightComponent={{text: 'WELCOME', onPress: ()=>this.welcomeButtonHandler(), style: {color: 'white', fontSize: 11, fontFamily: "Futura" }}}
            leftComponent={{text: 'PROJECTS', onPress: ()=>this.myProjectsButtonHandler(), style: {color: 'white', fontSize: 11, fontFamily: "Futura"}}}
            /> : 
            ( this.state.myProjectsScreen === true ? 
            <Header
            backgroundColor="#31CCC8" 
            rightComponent={{text: 'ABOUT ME', onPress: ()=>this.aboutMeButtonHandler(), style: {color: 'white', fontSize: 11, fontFamily: "Futura"}}}
            leftComponent={{text: 'WELCOME', onPress: ()=>this.welcomeButtonHandler(), style: {color: 'white', fontSize: 11, fontFamily: "Futura" }}}
            centerComponent={{text: 'PROJECTS', onPress: ()=>this.myProjectsButtonHandler(), style: {color: 'white', fontSize: 18, fontFamily: "Futura"}}}
            /> : 
            <Header
            backgroundColor="#31CCC8" 
            leftComponent={{text: 'ABOUT ME', onPress: ()=>this.aboutMeButtonHandler(), style: {color: 'white', fontSize: 11, fontFamily: "Futura"}}}
            centerComponent={{text: 'WELCOME', onPress: ()=>this.welcomeButtonHandler(), style: {color: 'white', fontSize: 18, fontFamily: "Futura" }}}
            rightComponent={{text: 'PROJECTS', onPress: ()=>this.myProjectsButtonHandler(), style: {color: 'white', fontSize: 11, fontFamily: "Futura"}}}
            />
            )}

          {this.state.welcomeScreen === true ? <WelcomeScreen/> : null}
          {this.state.aboutMeScreen === true ? <AboutMeScreen/> : null}
          {this.state.myProjectsScreen === true ? <MyProjectsScreen/> : null}

        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: "13%",
  }
});

// To increase the area of what is clickable in the header, maybe i could add 3 touchable opacity components on top of the header, have them in a row using flex direction row, and give each of them the onPress to change state based on whats clicked. This could fix the issue but i will need to figure out to have them inside/on top of the Header