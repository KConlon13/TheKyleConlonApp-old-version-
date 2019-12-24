import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar, Button, Icon, ButtonGroup, Image, SocialIcon} from 'react-native-elements';

class VideoPlayer extends Component {

    render(){
        return (
            <View>
                <Text style={styles.videoTitle}>{this.props.videoName}</Text>
                {/* <Avatar 
                rounded
                size="xlarge"
                activeOpacity={0.7}
                source={ this.props.videoImage }
                /> */}
                <Icon reverse size="50" containerStyle={{alignItems: "center", paddingBottom: "5%", paddingTop: "5%" }} justifyContent="center" color={this.props.videoColor} name="youtube" type="font-awesome" onPress={()=>Linking.openURL(this.props.videoUrl)}/> 
                {/* <Image source={{uri: this.props.videoImage}} style={{ width: 300, height: 200 }} PlaceholderContent={ <ActivityIndicator /> } /> */}

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
    }
})

export default VideoPlayer;