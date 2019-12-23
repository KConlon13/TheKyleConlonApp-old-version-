import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { Header, Avatar, Button, Icon, ButtonGroup } from 'react-native-elements';

// import { DrawerNavigator } from 'react-navigation';
import AboutMeScreen from "./AboutMeScreen"
import WelcomeScreen from "./WelcomeScreen"
import MyProjectsScreen from "./MyProjectsScreen"

export default class App extends React.Component {
  state = {
    welcomeScreen: true,
    aboutMeScreen: false,
    myProjectsScreen: false
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
          <Header
            backgroundColor="#31CCC8" 
            leftComponent={{text: 'ABOUT ME', onPress: ()=>this.aboutMeButtonHandler(), style: {color: 'white', fontSize: 10, fontFamily: "Futura"}}}
            centerComponent={{text: 'WELCOME', onPress: ()=>this.welcomeButtonHandler(), style: {color: 'white', fontSize: 18, fontFamily: "Futura"} } }
            rightComponent={{text: 'PROJECTS', onPress: ()=>this.myProjectsButtonHandler(), style: {color: 'white', fontSize: 10, fontFamily: "Futura"}}}
            />

          {this.state.welcomeScreen === true ? <WelcomeScreen/> : null}
          {this.state.aboutMeScreen === true ? <AboutMeScreen/> : null}
          {this.state.myProjectsScreen === true ? <MyProjectsScreen/> : null}

        </View>
      );
    }
  }

// const myApp = DrawerNavigator({
//     Welcome: {
//       screen: WelcomeScreen
//     },
//     AboutMe: {
//       screen: AboutMeScreen
//     },
//     MyProjects: {
//       screen: MyProjectsScreen
//     }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: "13%",
  }
});
