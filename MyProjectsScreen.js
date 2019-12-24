import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Button, Icon, ButtonGroup } from 'react-native-elements';
import VideoPlayer from './VideoPlayer'

class MyProjectsScreen extends Component {

    videoLinks = ["https://www.youtube.com/watch?v=dtCtC0es7S0", "https://www.youtube.com/watch?v=RsICl8cgj2s", "https://www.youtube.com/watch?v=vrLMXdY-g58"]

    videoNames = ["Chewsy iOS App", "ArtWork Web Service", "Potterless Web Experience"]

    videoColors = ["#FF6700", "#13E9F0", "#7713F0"]

    videoImages = ["require(./ChewsyLogo.png)", "require(./ArtWorkLogo.png)", "require(./PotterlessLogo.png)"]

    render(){
        return (
            <View style={styles.projectsPage}>
                <ScrollView 
                ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight)=>{  
                }}>
                    <VideoPlayer videoUrl={this.videoLinks[0]} videoName={this.videoNames[0]} videoColor ={this.videoColors[0]} videoImage={this.videoImages[0]} /> 
                    <VideoPlayer videoUrl={this.videoLinks[1]} videoName={this.videoNames[1]} videoColor ={this.videoColors[1]} videoImage={this.videoImages[1]} />
                    <VideoPlayer videoUrl={this.videoLinks[2]} videoName={this.videoNames[2]} videoColor ={this.videoColors[2]} videoImage={this.videoImages[2]} />
                </ScrollView>
            </View>
        )
    }
}  

const styles = {
    projectsPage: {
        height: 690
    }
}

export default MyProjectsScreen;