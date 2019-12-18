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
              onPress={() => alert("Photo click works!")}
              activeOpacity={0.7}
              source={
                // uri:
                // 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                require("./kylePhoto.jpg")
              }
            />
            <View style={styles.welcomeText}>
              <Text style={styles.name}>Hi there, I'm </Text><Text style={styles.coloredName}>Kyle Conlon</Text>
              <Text style={styles.subname}>Web & iOS Developer</Text>
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
    marginTop: "20%",
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
  // }
});
