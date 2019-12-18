import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { Header, Avatar, Button, Icon } from 'react-native-elements';

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
              source={ require("./kylePhoto.jpg") }
            />
            <View>
              <Text style={styles.name}>Hi there, I'm </Text>
              <Text style={styles.coloredName}>Kyle Conlon</Text>
              <Text style={styles.subname}>Web & iOS Developer</Text>
              <Text style={styles.welcomeLine}>________________________</Text>
              <Text style={styles.welcomeParagraph}>Software and music extraordinaire, Kyle Conlon had the most humble beginnings when it came to code. Spending hours upon hours on Codecadamy while in a van touring the country with a band was a great start, but he craved something more. That's when he discovered Flatiron School's Immersive Software Engineering Bootcamp- which helped him propel his coding skills to even greater heights! He is now able to craft beautifully elaborate websites and iOS apps using his mere mortal hands, something he'd never thought possible. And so his adventure continues! Where shall it take him next? </Text>
              <Text style={styles.welcomeLine}>________________________</Text>
              {/* <Text>Skills Section</Text> */}
              <View style={{margin: 20}}>
                <Button raised title="Shoot me an Email" onPress={()=>Linking.openURL('mailto:KyleConlon13@gmail.com')} />
              </View>

              <View style={styles.iconGroup}>
                <Icon reverse color="dodgerblue" name="linkedin" type="font-awesome" onPress={()=>alert("LinkedIn page pops up here")}/>
                <Icon raised color="black" name="github" type="font-awesome" onPress={()=>alert("Github page pops up here")}/>
                <Icon reverse color="red" name="social-medium" type="foundation" onPress={()=>alert("Medium blog page pops up here")}/>
              </View>

          </View>
        </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: "13%",
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
  },
  iconGroup: {
    flexDirection: "row",
    justifyContent: "center"
  }
});
