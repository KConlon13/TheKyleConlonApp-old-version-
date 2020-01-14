import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Avatar, Button, Icon, ButtonGroup, Image, SocialIcon, Card} from 'react-native-elements';

class PotterlessProject extends Component {

    render(){
        return (
            <View>
                <Text style={styles.videoTitle} onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=RsICl8cgj2s")}>Potterless</Text>
                <Image source={require("./PotterlessScreenshot.png")} containerStyle={{ width: 370, height: 185, display: "block", marginLeft:"auto", marginRight:"auto" }} PlaceholderContent={ <ActivityIndicator /> } placeholderStyle={{ height: "100%", width: "100%" }} />
                <View style={styles.githubDemoLine}>
                    <Text style={styles.githubDemoLink} onPress={()=>Linking.openURL("https://github.com/KConlon13/Mod2PotterlessProject")}>Github</Text>
                    <Text style={styles.githubDemoDividerLine}> | </Text>
                    <Text style={styles.githubDemoLink} onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=RsICl8cgj2s")} >Demo</Text>
                </View>
                <Text style={styles.projectBio}>The Wizarding World (aka Warner Bros) have done an incredible job creating interactive platforms to keep Harry Potter fans satisfied for years now- whether it be the immersive amusement park in Universal Studios, the epic book/movie series, or their online presence... namely the Pottermore website. This inspired the building of Potterless (the name implying it provides some Harry Potter fun but not any more than Pottermore)- a light-hearted attempt to create an engaging and themed experience that could (almost) rival or imitate what the Pottermore website does so successfully.</Text>
                <Card title="What I Used" titleStyle={{ color: "black"}} containerStyle={{ borderColor: "#31CCC8", marginTop: 10, marginBottom: 20}} >
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.videoList}>Ruby</Text>
                        <Text style={styles.videoList}>Rails</Text>
                        <Text style={styles.videoList}>HTML & CSS</Text>
                        <Text style={styles.videoList}>Bootstrap UI Framework</Text>
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

export default PotterlessProject;