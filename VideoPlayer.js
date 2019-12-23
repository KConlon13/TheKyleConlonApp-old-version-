import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar, Button, Icon, ButtonGroup, Image } from 'react-native-elements';

class VideoPlayer extends Component {

    render(){
        return (
            <View>
                <Text>{this.props.videoName}</Text>
                {/* <Avatar 
                rounded
                size="xlarge"
                activeOpacity={0.7}
                source={ require(this.props.videoImage) }
                /> */}
                <Icon reverse color={this.props.videoColor} name="youtube" type="font-awesome" onPress={()=>Linking.openURL(this.props.videoUrl)}/> 
                <Image source={{uri: this.props.videoImage}} style={{ width: 300, height: 200 }} PlaceholderContent={ <ActivityIndicator /> } />

            </View>
        )
    }
}  

export default VideoPlayer;