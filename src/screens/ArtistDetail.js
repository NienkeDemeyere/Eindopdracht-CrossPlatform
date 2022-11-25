import React from "react";
import {useState, useEffect} from 'react';
import { ScrollView, View, Text, StyleSheet } from "react-native";
import themeStyle from "../styles/theme.style";
import darkmodeStyle from "../styles/darkmode.style";
import lightmodeStyle from "../styles/lightmode.style";
const ArtistDetail = (props) => {
    const {artistName} = props.route.params.song
    const [mode, setMode] = useState(lightmodeStyle)
    const goToSong = (song) => {
        props.navigation.navigate('SongDetail', {song:song})
    }
    const url = 'https://itunes.apple.com/search?media=music&limit=200&term='
    const [songs, setSongs] = useState([]);
    useEffect(()=>{
        fetch(url+artistName).then(res => res.json()).then(data =>{
                console.log(data)
        setSongs(data.results);
        });
    },[artistName]);
    const styles = StyleSheet.create({
        title:{
            fontSize: themeStyle.FONT_SIZE_TITLE,
            alignSelf: 'center',
            fontWeight: themeStyle.WEIGHT_TITLE,
            paddingBottom: themeStyle.PADDING_BOTTOM,
            color: mode.SECONDARY_COLOR
        },
        border:{
            borderBottomWidth: themeStyle.BOTTOM_BORDER_SIZE,
            borderStyle: themeStyle.BORDER_STYLE,
            padding: themeStyle.PADDING,
            borderColor: mode.SECONDARY_COLOR
        },
         
        view: {
            backgroundColor: mode.PRIMARY_COLOR,
            width: '100%',
            height: '100%'
        },
        text:{
            color: mode.PRIMARY_TEXT_COLOR,
            padding: themeStyle.PADDING
        }
        
    })
    return (
        <View style={styles.view}>
        <Text style={styles.title}>Alle liedjes van {artistName}</Text>
        <ScrollView style={styles.view}>
            <View style={styles.view}>
            
            {songs.filter(song=> (song.trackName != "Undefined"))
            .map(song=> (
                
                <Text key={song.trackId} style={(styles.text, styles.border)} onPress={()=>goToSong(song)}>Song title: {song.trackName}</Text>
            ))}
            </View>
        </ScrollView>
        </View>
        
    );
};
export default ArtistDetail;