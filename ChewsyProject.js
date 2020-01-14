import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ActivityIndicator, ActionSheetIOS } from 'react-native';
import { Avatar, Button, Icon, ButtonGroup, Image, SocialIcon, Card} from 'react-native-elements';

class ChewsyProject extends Component {

    githubClickHandler=()=>{
        ActionSheetIOS.showActionSheetWithOptions(
            {
              options: ['Cancel', 'FrontEnd Github', 'BackEnd Github'],
              FrontEndButtonIndex: 1,
              BackEndButtonIndex: 2,
              cancelButtonIndex: 0,
            },
            (buttonIndex) => {
              if (buttonIndex === 1) {
                Linking.openURL("https://github.com/KConlon13/ChewsyFrontend")
              } else if (buttonIndex === 2) {
                  Linking.openURL("https://github.com/KConlon13/ChewsyBackend")
              } 
            },
          );
    }

    render(){
        return (
            <View>
                <Text style={styles.videoTitle}>Chewsy</Text>
                <Image source={require("./ChewsyScreenshot.png")} containerStyle={{ width: 370, height: 200, display: "block", marginLeft:"auto", marginRight:"auto",  }} PlaceholderContent={ <ActivityIndicator />} placeholderStyle={{ height: "100%", width: "100%" }} />
                <View style={styles.githubDemoLine}>
                    <Text style={styles.githubDemoLink} onPress={()=>this.githubClickHandler()}>Github</Text>
                    <Text style={styles.githubDemoDividerLine}> | </Text>
                    <Text style={styles.githubDemoLink} onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=dtCtC0es7S0")}>Demo</Text>
                </View>
                <Text style={styles.projectBio}>Chewsy is a food allergy-friendly restaurant finding iOS mobile app for people with food allergies. Enabling those with peanut, treenut, gluten, dairy, egg, and wheat allergies to finally feel comfortable while dining out, with Chewsy you and your loved ones will never have to worry about Epipens or finding the location of the nearest hospital again. Eat without fear, and explore the wonderful world of food unhithered!</Text>
                <Card title="What I Used" titleStyle={{ color: "black"}} containerStyle={{ borderColor: "#31CCC8", marginTop: 10}} >
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.videoList}>React Native</Text>
                        <Text style={styles.videoList}>Javascript</Text>
                        <Text style={styles.videoList}>Ruby</Text>
                        <Text style={styles.videoList}>Rails</Text>
                        <Text style={styles.videoList}>Heroku</Text>
                        <Text style={styles.videoList}>HTML & CSS</Text>
                        <Text style={styles.videoList}>React Native Elements</Text>
                    </View>
                </Card>
                <Text style={styles.dividerLine}>________________________</Text>
            </View>
        )
    }
}  

const styles = ({
    videoTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: "5%",
        marginBottom: "4%"
    },
    dividerLine: {
        textAlign: "center",
        color: "#E1E1E1",
        paddingTop: "3%"
    },
    videoSubTitle: {
        fontSize: 19,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginBottom: "3%"
    },
    videoList: {
        fontSize: 14,
        color: "black",
        textAlign: "center",
    },
    githubDemoLine: {
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: "auto",
    },
    githubDemoLink: {
        color: "#31CCC8",
        fontWeight: "bold",
        marginTop: "4%",
        marginBottom: "2%",
        fontSize: 18
    },
    githubDemoDividerLine: {
        marginTop: "4%",
        marginBottom: "4%",
        fontSize: 20
    },
    projectBio: {
        textAlign: "center",
        marginTop: "0%",
        marginBottom: "2%",
        paddingRight: "5%",
        paddingLeft: "5%",
        fontSize: 15
    }
})

export default ChewsyProject;