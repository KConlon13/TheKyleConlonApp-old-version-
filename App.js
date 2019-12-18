import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Header, Avatar } from 'react-native-elements'

export default class App extends React.Component {

  onPressButton(){
    alert("Welcome to Kyle's website! This will be the menu eventually 🤞")
  }

  render(){
      return (
        <View>
    
          <Header
            backgroundColor="#31CCC8" 
            centerComponent={{text: 'MENU', onPress: ()=>this.onPressButton(), style: {color: 'white', fontSize: 18, fontFamily: "Futura"} } }
            />
    
          <View style={styles.container}>
            <Avatar 
              rounded
              size="xlarge"
              onPress={() => alert("Ouch my nose!")}
              activeOpacity={0.7}
              source={
                // uri:
                // 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                require("./kylePhoto.jpg")
              }
            />
            <View style={styles.welcomeText}>
              <Text style={styles.name}>Hi there, I'm </Text>
              <Text style={styles.coloredName}>Kyle Conlon</Text>
              <Text style={styles.subname}>Web & iOS Developer</Text>
              <Text style={styles.welcomeLine}>________________________</Text>
              <Text style={styles.welcomeParagraph}>Software and music extraordinaire, Kyle Conlon had the most humble beginnings when it came to code. Spending hours upon hours on Codecadamy while in a van touring the country with a band was a great start, but he craved something more. That's when he discovered Flatiron School's Immersive Software Engineering Bootcamp- which helped him propel his coding skills to even greater heights! He is now able to craft beautifully elaborate websites and iOS apps using his mere mortal hands, something he'd never thought possible. And so his adventure continues! Where shall it take him next? </Text>
              <Text style={styles.welcomeLine}>________________________</Text>
              {/* <Text>Skills Section</Text> */}
            </View>
          </View>
    
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "18%",
    // margin: "50%"
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: "2%"
  },
  coloredName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#31CCC8",
    textAlign: "center",
  },
  subname: {
    fontSize: 13,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    paddingTop: "1%"
  },
  // welcomeText: {
  //   backgroundColor: 'white',
  //   // padding: "20%"
  // },
  welcomeLine: {
    textAlign: "center",
    color: "#E1E1E1",
    paddingTop: "3%",
  },
  welcomeParagraph: {
    textAlign: "center",
    fontSize: 12,
    paddingTop: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "1%",

  }
});
