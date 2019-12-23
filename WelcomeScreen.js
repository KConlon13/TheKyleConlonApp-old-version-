import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { Avatar, Button, Icon, ButtonGroup } from 'react-native-elements';

class WelcomeScreen extends Component {
    render(){
        return (
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

                    <View style={{margin: 20}}>
                        <Button raised buttonStyle={styles.emailButton} title="Send Me An Email" onPress={()=>Linking.openURL('mailto:KyleConlon13@gmail.com')} />
                    </View>

                    <View style={styles.iconGroup}>
                        <Icon reverse color="black" name="phone" type="font-awesome" onPress={()=>Linking.openURL("tel:516-640-9350")}/>
                        <Icon reverse color="#2867B2" name="linkedin" type="font-awesome" onPress={()=>Linking.openURL("https://www.linkedin.com/in/devkyleconlon/")}/>
                        <Icon raised color="black" name="github" type="font-awesome" onPress={()=>Linking.openURL("https://github.com/KConlon13")}/>
                        <Icon reverse color="red" name="social-medium" type="foundation" onPress={()=>Linking.openURL("https://medium.com/@kyleconlon13")}/>
                    </View>
                </View>
            </View>
        )
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
      },
      emailButton: {
        backgroundColor: "#31CCC8",
        fontSize: 1
      }
});

export default WelcomeScreen;