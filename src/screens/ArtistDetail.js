import React from "react";
import {useState, useEffect} from 'react';

import { ScrollView, View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";

import themeStyle from "../styles/theme.style";
import themeContext from "../styles/themeContext";
import { useContext } from "react";

const ArtistDetail = (props) => {
    const theme = useContext(themeContext)

    const {artistName, artistViewUrl } = props.route.params.song

    const goToSong = (song) => {
        props.navigation.navigate('SongDetail', {song:song})
    }

    const openUrl = (url) => {
        Linking.openURL(url).catch(err =>
          console.error('Fout bij openen url', err)
        );
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
            color: theme.SECONDARY_COLOR
        },
        border:{
            borderBottomWidth: themeStyle.BOTTOM_BORDER_SIZE,
            borderStyle: themeStyle.BORDER_STYLE,
            padding: themeStyle.PADDING,
            borderColor: theme.SECONDARY_COLOR
        },
         
        view: {
            backgroundColor: theme.PRIMARY_COLOR,
            width: '100%',
            height: '100%'
        },
        text:{
            color: theme.PRIMARY_TEXT_COLOR,
            padding: themeStyle.PADDING
        }
        
    })
    return (
        <View style={styles.view}>
        <Text style={styles.title}>Alle liedjes van {artistName}</Text>
        <TouchableOpacity onPress={()=> openUrl(artistViewUrl)}>
            <Text >Klik hier om meer over {artistName} te weten te komen</Text>
        </TouchableOpacity>
        <ScrollView style={styles.view}>
            <View style={styles.view}>
            
            {songs.filter(song=> (song.trackName != "Undefined"))
            .map(song=> (
                
                <Text key={song.trackId} style={[styles.text, styles.border]} onPress={()=>goToSong(song)}>Song title: {song.trackName}</Text>
            ))}
            </View>
        </ScrollView>
        </View>
        
    );
};
export default ArtistDetail;