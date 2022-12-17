import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native";
import themeStyle from "../styles/theme.style";
import lightmodeStyle from "../styles/lightmode.style";
import darkmodeStyle from "../styles/darkmode.style";

const Home = (props) => {
    
    const [state, setState] = useState("")
    
    const goToSong = (song) => {
        props.navigation.navigate('SongDetail', {song:song})
    }
    const goToArtist = (song) => {
        props.navigation.navigate('ArtistDetail',{song:song})
    }
    const url = 'https://itunes.apple.com/search?media=music&limit=200&term='
    
    const [songTitle, changeSongTitle] = useState(''); 
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        setState("loading")
        fetch(url + songTitle).then(res => res.json()).then(data  => {
            
            setSongs(data.results);
            setState("done")

        });

    }, [songTitle]);
    const styles = StyleSheet.create({
        input:{
            padding: themeStyle.PADDING,
            color: mode.PRIMARY_TEXT_COLOR
        },
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
        image:{
            alignSelf: 'center',
            width: 400, 
            height: 200
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
            <Text style={styles.title}>Zoek jouw favoriete liedje</Text>
            <Image style={styles.image} source={require('/CrossPlatformDev/Eindopdracht-NienkeDemeyere/assets/music.jpg')}></Image>
            <TextInput style={styles.input} value={songTitle} onChangeText={changeSongTitle} placeholder='Zet hier je zoekterm'></TextInput>
            {state=="loading" ? <Image style={styles.image} source={require("/CrossPlatformDev/Eindopdracht-NienkeDemeyere/assets/loading-gif.gif")}></Image> :
            <ScrollView>
                {songs.map(song => (
                    <View style={styles.border} key={song.trackId}>
                        <Text style={styles.text} onPress={()=>goToArtist(song)}>
                            Artist: {song.artistName}
                        </Text>
                        <Text style={styles.text} onPress={()=>goToSong(song)}>
                            Song title: {song.trackName}
                        </Text>
                    </View>
                    
                ))}
                
            </ScrollView>}
        </View>
        
    );
};
export default Home;