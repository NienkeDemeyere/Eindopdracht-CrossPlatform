import React from "react";
import { useState, useEffect } from "react";

import { ScrollView, View, Text, StyleSheet, Image, Button, ActivityIndicator } from "react-native";
import { TextInput } from "react-native";
import CustomButton from "../config/customButton";

import themeStyle from "../styles/theme.style";
import themeContext from "../styles/themeContext";
import { useContext } from "react";

const Home = (props) => {
    const theme = useContext(themeContext)

    const [state, setState] = useState(false)
    const [message, setMessage] = useState("")
    const [songTitle, changeSongTitle] = useState(''); 
    const [songs, setSongs] = useState([]);

    const url = 'https://itunes.apple.com/search?media=music&limit=200&term='
    
    const goToSong = (song) => {
        props.navigation.navigate('SongDetail', {song:song})
    }

    const goToArtist = (song) => {
        props.navigation.navigate('ArtistDetail',{song:song})
    }

    const onSearchPressed = ()=>{
        setState(true)
        setMessage("")
        fetch(url + songTitle).then(res => res.json()).then(data  => {
            if(data.results && data.results.length > 0 ){
                setSongs(data.results);
            }
            else if (data.results){
                setSongs([])
                setMessage("Geen liedjes gevonden")
            }
            else{
                setMessage("Onbestaande artiest of liedje ingevuld.")
            }

            setState(false)

        }).catch(error =>{
            setState(false)
            setMessage(`Er ging iets fout bij het ophalen van de liedjes: ${error}`)
        });
    }
    const spinner = state ? (
        <View>
            <ActivityIndicator size="large" color={theme.SECONDARY_COLOR}/>
        </View>
    ) : null;

    const styles = StyleSheet.create({
        input:{
           padding: themeStyle.PADDING,
            color: theme.PRIMARY_TEXT_COLOR,
            flex : 4
        },
        title:{
            fontSize: themeStyle.FONT_SIZE_TITLE,
            alignSelf: 'center',
            fontWeight: themeStyle.WEIGHT_TITLE,
            paddingBottom: themeStyle.PADDING_BOTTOM,
            color: theme.SECONDARY_COLOR,
        },
       
        border:{
            borderBottomWidth: themeStyle.BOTTOM_BORDER_SIZE,
            borderStyle: themeStyle.BORDER_STYLE,
            padding: themeStyle.PADDING,
            borderColor: theme.SECONDARY_COLOR
        },
        image:{
            alignSelf: 'center',
            width: 400, 
            height: 200,
        }, 
        view: {
            backgroundColor: theme.PRIMARY_COLOR,
            flex:1
        },
        text:{
            color: theme.PRIMARY_TEXT_COLOR,
            padding: themeStyle.PADDING,
            flex : 1
        },
        error:{
            color: 'red',
            fontSize: 20,
            fontWeight : 'bold',
        },
        albumImage:{
            backgroundColor: theme.PRIMARY_COLOR,
            width: 80, 
            height: 80,
        },
        rowView : {
            flexDirection: 'row',
        },
        columView :{
            flexDirection: 'column',
            
        }
         
    })
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Zoek jouw favoriete liedje</Text>
            <Image style={styles.image} source={require('../../assets/music.jpg')}></Image>
            <View style={styles.rowView}>
                <TextInput style={styles.input} value={songTitle} onChangeText={changeSongTitle} placeholder='Zet hier je zoekterm'></TextInput>
                <CustomButton onPressed={onSearchPressed}>Zoek</CustomButton>
            </View>
            
            {spinner}
            <Text style={styles.error}>{message}</Text>
            <ScrollView>
                {songs.map(song => (
                    <View style={[styles.border, styles.rowView]} key={song.trackId}>
                        <Image style={styles.albumImage} source={{uri: song.artworkUrl100}}/>
                        <View style={styles.columView}>
                        <Text style={styles.text} onPress={()=>goToArtist(song)}>
                            Artist: {song.artistName}
                        </Text>
                        <Text style={styles.text} onPress={()=>goToSong(song)}>
                            Song title: {song.trackName}
                        </Text>
                        </View>
                    </View> 
                ))}
                
            </ScrollView>
        </View>
        
    );
};
export default Home;