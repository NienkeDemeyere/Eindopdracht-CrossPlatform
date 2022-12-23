import React from "react";
import { useContext } from "react";

import { ScrollView, View, Image, StyleSheet, Linking, Text } from "react-native";
import {ListItem } from "react-native-elements";
import { TouchableOpacity } from "react-native";

import { EventRegister } from 'react-native-event-listeners';
import favorietContext from "../config/favorietContext";

import CustomButton from "../config/customButton";
import themeStyle from "../styles/theme.style";
import themeContext from "../styles/themeContext";

const SongDetail =(props) => {
    const theme = useContext(themeContext)
    const favoriet = useContext(favorietContext)

    const song = props.route.params.song
    const {artistName, trackName, collectionName, artworkUrl100, trackPrice, releaseDate, country, primaryGenreName,previewUrl, trackViewUrl} = props.route.params.song;
    
    const instellenAlsFavoriet= (song) =>{
        props.navigation.navigate('Settings')
        EventRegister.emit("changeFavorite", song)
    }

    const goToArtist = () => {
        props.navigation.navigate('ArtistDetail',{song:song})
    }

    const openUrl = (url) => {
        Linking.openURL(url).catch(err =>
          console.error('Fout bij openen url', err)
        );
      }

    const formatDate = (date) =>{
        const formattedDate = date.slice(0, -1).replace("T", " ");
        return formattedDate
    }
    const styles = StyleSheet.create({
        
        border:{
            borderBottomWidth: themeStyle.BOTTOM_BORDER_SIZE,
            borderStyle: themeStyle.BORDER_STYLE,
            padding: themeStyle.PADDING,
            borderColor: theme.SECONDARY_COLOR
        },
        image:{
            backgroundColor: theme.PRIMARY_COLOR,
            width: 100, 
            height: 100,
            padding : themeStyle.PADDING
        }, 
        view: {
            backgroundColor: theme.PRIMARY_COLOR,
            width: '100%',
            height: '100%'
        },
        listitem:{
            color: theme.PRIMARY_TEXT_COLOR,
            backgroundColor: theme.PRIMARY_COLOR
        },
        button:{
            padding: themeStyle.PADDING,
            backgroundColor: theme.PRIMARY_COLOR,
            color : theme.SECONDARY_COLOR,
            width : themeStyle.BUTTON_WIDTH,
            height: themeStyle.BUTTON_HEIGHT
        },
        text:{
            color: theme.PRIMARY_TEXT_COLOR
        },
        link:{
            color: theme.LINK_COLOR
        },
        starimage:{
            height: 30,
            width:30,
            padding : themeStyle.PADDING
        },
        rowView:{
            flexDirection :  "row",
            padding : themeStyle.PADDING
        }
    })
    return (
        <ScrollView style={styles.view}>
            <View style={styles.rowView}>

            
            <Image style={styles.image} source={{uri: artworkUrl100}}/>
            {favoriet != undefined && song.trackId == favoriet.trackId ? <Image style={styles.starimage} source={require('../../assets/staricon.png')}/> : <CustomButton onPressed={()=>instellenAlsFavoriet(song)}>Stel in als lievelingsliedje</CustomButton>}
            </View>
            <View style={styles.view}>
                <TouchableOpacity onPress={()=> goToArtist()}>
                    <ListItem bottomDivider topDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title style={styles.text}>Artiest:</ListItem.Title>
                        <ListItem.Subtitle style={styles.text}>{artistName}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                
                </TouchableOpacity>
                <ListItem bottomDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title style={styles.text}>Titel van het nummer:</ListItem.Title>
                        <ListItem.Subtitle style={styles.text}>{trackName}</ListItem.Subtitle>
                        <TouchableOpacity onPress={()=> openUrl(previewUrl)}>
                        <Text style={styles.text}>Klik hier om een preview te downloaden</Text>
                        </TouchableOpacity>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title style={styles.text}>Collectie:</ListItem.Title>
                        <ListItem.Subtitle style={styles.text}>{collectionName}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title style={styles.text}>Prijs:</ListItem.Title>
                        <ListItem.Subtitle style={styles.text}>{(song.currency == 'USD' ? '\u0024': '\u20A0') + trackPrice}</ListItem.Subtitle>
                        <TouchableOpacity onPress={()=> openUrl(trackViewUrl)}>
                        <Text style={styles.text}>Klik hier om het liedje te bekijken op Apple Music</Text>
                        </TouchableOpacity>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title style={styles.text}>Publicatiedatum:</ListItem.Title>
                        <ListItem.Subtitle style={styles.text}>{formatDate(releaseDate)}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title style={styles.text}>Land:</ListItem.Title>
                        <ListItem.Subtitle style={styles.text}>{country}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title style={styles.text}>Genre:</ListItem.Title>
                        <ListItem.Subtitle style={styles.text}>{primaryGenreName}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
        </ScrollView>
    );
}
export default SongDetail;
