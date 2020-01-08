import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar, Button, Icon, ButtonGroup, Image, SocialIcon} from 'react-native-elements';

class ChewsyProject extends Component {

    render(){
        return (
            <View>
                <Text style={styles.videoTitle} onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=dtCtC0es7S0")}>Chewsy iOS App</Text>
                <Image source={require("./ChewsyScreenshot.png")} onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=dtCtC0es7S0")} containerStyle={{ width: 370, height: 200, display: "block", marginLeft:"auto", marginRight:"auto" }} PlaceholderContent={ <ActivityIndicator /> } />
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
        paddingTop: "3%"
    }
})

export default ChewsyProject;