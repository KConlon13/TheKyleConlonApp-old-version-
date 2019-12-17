import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Header } from 'react-native-elements'

export default class App extends React.Component {

  onPressButton(){
    alert("Welcome to Kyle's website! This will be the menu eventually!")
  }

  render(){
      return (
        <View>
    
          <Header
            backgroundColor="dodgerblue" 
            centerComponent={{text: 'MENU', onPress: ()=>this.onPressButton(), style: {color: 'white', fontSize: 18, fontFamily: "Futura"} } }
            />
    
          <View style={styles.container}>
            <Text style={styles.name}>Kyle Conlon</Text>
            <Text>Web & iOS Developer</Text>
          </View>
    
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "40%"
  },
  name: {
    fontSize: 26,
    // fontWeight: "bold"
  },

});
