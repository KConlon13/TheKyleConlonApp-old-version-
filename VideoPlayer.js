import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { Avatar, Button, Icon, ButtonGroup } from 'react-native-elements';

class VideoPlayer extends Component {
    render(){
        return (
            <View>
                <Text>{this.props.videoName}</Text>
                <Icon reverse color="red" name="youtube" type="font-awesome" onPress={()=>Linking.openURL(this.props.videoUrl)}/> 
            </View>
        )
    }
}  

export default VideoPlayer;