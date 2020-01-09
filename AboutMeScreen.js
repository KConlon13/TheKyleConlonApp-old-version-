import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Button, Icon, ButtonGroup, Card } from 'react-native-elements';

class AboutMeScreen extends Component {
    render(){
        return (
            <View style={styles.aboutMePage}>
            <ScrollView 
            ref={ref => this.scrollView = ref}
            onContentSizeChange={(contentWidth, contentHeight)=>{  
            }}>
                <Text style={styles.name}>Who Is Kyle Conlon?</Text>
                <Text style={styles.introParagraph}>Software and music extraordinaire, Kyle Conlon had the most humble beginnings when it came to code. Spending hours upon hours on Codecadamy while in a van touring the country with a band was a great start, but he craved something more. That's when he discovered Flatiron School's Immersive Software Engineering Bootcamp- which helped him propel his coding skills to even greater heights! He is now able to craft beautifully elaborate websites and iOS apps using his mere mortal hands, something he'd never thought possible. And so his adventure continues! Where shall it take him next? </Text>
                <Text style={styles.welcomeLine}>________________________</Text>
                <Text style={styles.additionalTitle}>What Skills Does He Have?</Text>
                <View style={styles.cardGroup}>
                    <Card title="Front-End Skills" titleStyle={{ color: "#31CCC8"}} containerStyle={{ borderColor: "#31CCC8"}} >
                        <View style={{ alignItems: "center" }}>
                            <Text>Javascript</Text>
                            <Text>React</Text>
                            <Text>React Native</Text>
                            <Text>HTML & CSS</Text>
                            <Text>Bootstrap UI</Text>
                            <Text>Semantic UI</Text>
                            <Text>React Native Elements</Text>
                        </View>
                    </Card>
                    <Card title="Back-End Skills" titleStyle={{ color: "#31CCC8"}} containerStyle={{ borderColor: "#31CCC8"}} >
                        <View style={{ alignItems: "center" }}>
                            <Text>Ruby</Text>
                            <Text>Rails</Text>
                            <Text>SQL</Text>
                        </View>
                    </Card>
                    <Card title="Other Skills" titleStyle={{ color: "#31CCC8"}} containerStyle={{ borderColor: "#31CCC8"}} >
                        <View style={{ alignItems: "center" }}>
                            <Text>Git</Text>
                            <Text>Heroku</Text>
                            <Text>Microsoft Office Suite</Text>
                            <Text>Interpersonal Skills</Text>
                            <Text>Strong Team Player</Text>
                            <Text>Learning & Adapting Quickly</Text>
                        </View>
                    </Card>
                    <Text style={styles.welcomeLine}>________________________</Text>
                </View>
                <Text style={styles.additionalTitle}>Amazing! Where Is His Resume?</Text>
                {/* Add Experience and Background Following This Section Right Here */}
            </ScrollView>
            </View>
        )
    }
}  

const styles = StyleSheet.create({
    welcomeLine: {
        textAlign: "center",
        color: "#E1E1E1",
        paddingTop: "3%",
    },
    additionalTitle: {
        fontSize: 26,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: "5%",
        marginBottom: "3%"
      },
    introParagraph: {
        textAlign: "center",
        fontSize: 12,
        paddingTop: "5%",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: "1%",
      },
      name: {
        fontSize: 26,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: "7%"
      },
      cardGroup: {
        // flexDirection: "row",
        // justifyContent: "center",
        // margin: 1
      },
      aboutMePage: {
          height: 730
      }
});

export default AboutMeScreen;