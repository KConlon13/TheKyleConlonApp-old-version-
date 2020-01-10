import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar, Button, Icon, ButtonGroup, Image, SocialIcon} from 'react-native-elements';

class PotterlessProject extends Component {

    render(){
        return (
            <View>
                <Text style={styles.videoTitle} onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=RsICl8cgj2s")}>Potterless</Text>
                <Image source={require("./PotterlessScreenshot.png")} onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=RsICl8cgj2s")} containerStyle={{ width: 370, height: 200, display: "block", marginLeft:"auto", marginRight:"auto" }} PlaceholderContent={ <ActivityIndicator /> } />
                <Text style={styles.projectBio}>This is a little write up describing what this project is about. Its going to have words and adjectives and nouns and lots descriptive words oh boy. Coming soon!</Text>
                <View style={styles.githubDemoLine}>
                    <Text style={styles.githubDemoLink} >Github</Text>
                    <Text style={styles.githubDemoDividerLine}> | </Text>
                    <Text style={styles.githubDemoLink} onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=dtCtC0es7S0")} >Demo</Text>
                </View>
                <Text style={styles.videoSubTitle}>What I used:</Text>
                <Text style={styles.videoList}>Ruby</Text>
                <Text style={styles.videoList}>Rails</Text>
                <Text style={styles.videoList}>HTML & CSS</Text>
                <Text style={styles.videoList}>Bootstrap UI Framework</Text>
                <Text style={styles.dividerLine}>________________________</Text>
            </View>
        )
    }
}  

const styles = ({
    videoTitle: {
        fontSize: 26,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: "6%",
        marginBottom: "4%"
    },
    dividerLine: {
        textAlign: "center",
        color: "#E1E1E1",
        paddingTop: "3%",
        marginBottom: "10%"
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
        marginBottom: "4%",
        fontSize: 20
    },
    githubDemoDividerLine: {
        marginTop: "4%",
        marginBottom: "4%",
        fontSize: 20
    },
    projectBio: {
        textAlign: "center",
        marginTop: "6%",
        marginBottom: "2%",
        paddingRight: "5%",
        paddingLeft: "5%",
        fontSize: 15
    }
})

export default PotterlessProject;