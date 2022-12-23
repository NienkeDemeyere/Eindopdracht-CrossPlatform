import React from "react";
import {useState, useEffect} from 'react';

import { ScrollView, View, Text, StyleSheet, Linking, TouchableOpacity, ActivityIndicator, Image } from "react-native";

import themeStyle from "../styles/theme.style";

import themeContext from "../styles/themeContext";
import { useContext } from "react";

const ArtistDetail = (props) => {
    
    const theme = useContext(themeContext)

    const url = 'https://itunes.apple.com/search?media=music&limit=200&term='

    const [state, setState] = useState(false)
    const [songs, setSongs] = useState([]);

    const {artistName, artistViewUrl } = props.route.params.song

    const goToSong = (song) => {
        props.navigation.navigate('SongDetail', {song:song})
    }

    const openUrl = (url) => {
        Linking.openURL(url).catch(err =>
          console.error('Fout bij openen url', err)
        );
    }

    const spinner = state ? (
        <View>
            <ActivityIndicator size="large" color={theme.SECONDARY_COLOR}/>
        </View>
    ) : null;
    

    useEffect(()=>{
        setState(true)
        fetch(url+artistName).then(res => res.json()).then(data =>{
                console.log(data)
            setSongs(data.results);
            setState(false)
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
            borderColor: theme.BOTTOM_BORDER_COLOR
        },
        link:{
            color: theme.LINK_COLOR,
            textDecorationLine : 'underline',
            padding : themeStyle.PADDING
        },
        view: {
            backgroundColor: theme.PRIMARY_COLOR,
            width: '100%',
            height: '100%'
        },
        text:{
            color: theme.PRIMARY_TEXT_COLOR,
            padding: themeStyle.PADDING
        },
        albumImage:{
            backgroundColor: theme.PRIMARY_COLOR,
            width: 40, 
            height: 40,
        },
        rowView :{
            flexDirection: 'row',
        }
    })
    
    return (
        <View style={styles.view}>
        <Text style={styles.title}>Alle liedjes van {artistName}</Text>
        <TouchableOpacity onPress={()=> openUrl(artistViewUrl)}>
            <Text style={styles.link}>Klik hier om meer over {artistName} te weten te komen</Text>
        </TouchableOpacity>
        {spinner}
        <ScrollView style={styles.view}>
            <View style={styles.view}>
            
            {songs.filter(song=> (song.trackName != "Undefined"))
            .map(song=> (
                <View style={[styles.rowView, styles.border]} key={song.trackId} >
                    <Image style={styles.albumImage} source={{uri: song.artworkUrl100}}/>
                    <Text style={styles.text} onPress={()=>goToSong(song)}>Titel van het nummer: {song.trackName}</Text>
                </View> 
            ))}
            </View>
        </ScrollView>
        </View>
        
    );
};
export default ArtistDetail;