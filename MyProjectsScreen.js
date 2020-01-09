import React, { Component } from 'react';
// import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Button, Icon, ButtonGroup } from 'react-native-elements';
import ChewsyProject from './ChewsyProject';
import ArtWorkProject from './ArtWorkProject';
import PotterlessProject from './PotterlessProject';

class MyProjectsScreen extends Component {

    videoLinks = ["https://www.youtube.com/watch?v=dtCtC0es7S0", "https://www.youtube.com/watch?v=vrLMXdY-g58", "https://www.youtube.com/watch?v=RsICl8cgj2s"];
    videoColors = ["#FF6700", "#13E9F0", "#7713F0"];

    render(){
        return (
            <View style={styles.projectsPage}>
                <ScrollView 
                ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight)=>{  
                }}>
                    <ChewsyProject/>
                    <ArtWorkProject/>
                    <PotterlessProject/>
                </ScrollView>
            </View>
        )
    }
}  

const styles = {
    projectsPage: {
        height: 730
    }
}

export default MyProjectsScreen;