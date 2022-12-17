import React from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import {ListItem, Button } from "react-native-elements";
import { useState, useEffect } from "react";
import darkmodeStyle from "../styles/darkmode.style";
import lightmodeStyle from "../styles/lightmode.style";
import themeStyle from "../styles/theme.style";
import { TouchableOpacity } from "react-native-web";
const SongDetail =(props) => {
    //const [mode, setMode] = useState(lightmodeStyle)

    /*const json = localStorage.getItem("site-dark-mode");
    const isDarkMode = JSON.parse(json);*/
    
    const mode = props.route.params.mode;
    const setMode = props.route.params.setMode;
    useEffect(()=>{
        
        if(mode == darkmodeStyle){
            setMode(darkmodeStyle)
        }
        else{
            setMode(lightmodeStyle)
        }
    },[mode])

    const song = props.route.params.song
    const {artistName, trackName, collectionName, artworkUrl100, trackPrice, releaseDate, country, primaryGenreName} = props.route.params.song;
    const instellenAlsFavoriet= (song) =>{
        props.navigation.navigate('Settings', {song: song})
    }

    const goToArtist = () => {
        props.navigation.navigate('ArtistDetail',{song:song})
    }

    const styles = StyleSheet.create({
        
        border:{
            borderBottomWidth: themeStyle.BOTTOM_BORDER_SIZE,
            borderStyle: themeStyle.BORDER_STYLE,
            padding: themeStyle.PADDING,
            borderColor: mode.SECONDARY_COLOR
        },
        image:{
            backgroundColor: mode.PRIMARY_COLOR,
            width: 100, 
            height: 100
        }, 
        view: {
            backgroundColor: mode.PRIMARY_COLOR,
            width: '100%',
            height: '100%'
        },
        listitem:{
            color: mode.SECONDARY_COLOR,
            backgroundColor: mode.PRIMARY_COLOR
        },
        buton:{
            padding: themeStyle.PADDING,
            backgroundColor: mode.PRIMARY_COLOR,
            color : mode.SECONDARY_COLOR,
            width : themeStyle.BUTTON_WIDTH,
            height: themeStyle.BUTTON_HEIGHT
        },
        text:{
            color: mode.PRIMARY_TEXT_COLOR
        }
    })
    return (
        <ScrollView style={styles.view}>
            <Image style={styles.image}source={{uri: artworkUrl100}}/>
            <Button style={styles.button} title="Stel in als lievelingsliedje" onPress={()=> instellenAlsFavoriet(song)}/>
            <View style={styles.view}>
                <TouchableOpacity onPress={()=> goToArtist}>
                <ListItem bottomDivider topDivider >
                    <ListItem.Content>
                        <ListItem.Title>Artist:</ListItem.Title>
                        <ListItem.Subtitle>{artistName}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                </TouchableOpacity>
                

                <ListItem bottomDivider topDivider>
                    <ListItem.Content>
                        <ListItem.Title>Song:</ListItem.Title>
                        <ListItem.Subtitle>{trackName}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider topDivider>
                    <ListItem.Content>
                        <ListItem.Title>Collection:</ListItem.Title>
                        <ListItem.Subtitle>{collectionName}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider topDivider>
                    <ListItem.Content>
                        <ListItem.Title>Prijs:</ListItem.Title>
                        <ListItem.Subtitle>{trackPrice}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider topDivider>
                    <ListItem.Content>
                        <ListItem.Title>Release date:</ListItem.Title>
                        <ListItem.Subtitle>{releaseDate}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider topDivider>
                    <ListItem.Content>
                        <ListItem.Title>Land:</ListItem.Title>
                        <ListItem.Subtitle>{country}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider topDivider>
                    <ListItem.Content>
                        <ListItem.Title>Genre:</ListItem.Title>
                        <ListItem.Subtitle>{primaryGenreName}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
        </ScrollView>
    );
}
export default SongDetail;
