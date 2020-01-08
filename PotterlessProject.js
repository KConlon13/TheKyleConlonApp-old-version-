import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar, Button, Icon, ButtonGroup, Image, SocialIcon} from 'react-native-elements';

class PotterlessProject extends Component {

    render(){
        return (
            <View>
                <Text style={styles.videoTitle} onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=RsICl8cgj2s")}>Potterless Web Experience</Text>
                <Image source={require("./PotterlessScreenshot.png")} onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=RsICl8cgj2s")} containerStyle={{ width: 370, height: 200, display: "block", marginLeft:"auto", marginRight:"auto" }} PlaceholderContent={ <ActivityIndicator /> } />
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
        marginTop: "5%",
        marginBottom: "3%"
    },
    dividerLine: {
        textAlign: "center",
        color: "#E1E1E1",
        paddingTop: "3%"
    }
})

export default PotterlessProject;