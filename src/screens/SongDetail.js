import React from "react";
import { ScrollView, View, Image, StyleSheet, Linking, Text } from "react-native";
import {ListItem, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native";

import themeStyle from "../styles/theme.style";
import themeContext from "../styles/themeContext";
import { useContext } from "react";

const SongDetail =(props) => {
    const theme = useContext(themeContext)

    const song = props.route.params.song

    const {artistName, trackName, collectionName, artworkUrl100, trackPrice, releaseDate, country, primaryGenreName,previewUrl, trackViewUrl} = props.route.params.song;
    const instellenAlsFavoriet= (song) =>{
        props.navigation.navigate('Settings', {song: song})
    }

    const goToArtist = () => {
        props.navigation.navigate('ArtistDetail',{song:song})
    }

    const openUrl = (url) => {
        Linking.openURL(url).catch(err =>
          console.error('Fout bij openen url', err)
        );
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
            height: 100
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
        buton:{
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
        }
    })
    return (
        <ScrollView style={styles.view}>
            <Image style={styles.image}source={{uri: artworkUrl100}}/>
            <Button style={styles.button} title="Stel in als lievelingsliedje" onPress={()=> instellenAlsFavoriet(song)}/>
            <View style={styles.view}>
                <TouchableOpacity onPress={()=> goToArtist()}>
                    <ListItem bottomDivider topDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title>Artist:</ListItem.Title>
                        <ListItem.Subtitle>{artistName}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                
                </TouchableOpacity>
                <ListItem bottomDivider topDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title>Song:</ListItem.Title>
                        <ListItem.Subtitle>{trackName}</ListItem.Subtitle>
                        <TouchableOpacity onPress={()=> openUrl(previewUrl)}>
                        <Text style={styles.text}>Klik hier om een preview te downloaden</Text>
                        </TouchableOpacity>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider topDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title>Collection:</ListItem.Title>
                        <ListItem.Subtitle>{collectionName}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider topDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title>Prijs:</ListItem.Title>
                        <ListItem.Subtitle>{trackPrice}</ListItem.Subtitle>
                        <TouchableOpacity onPress={()=> openUrl(trackViewUrl)}>
                        <Text style={styles.text}>Klik hier om een het liedje te bekijken op iTunes</Text>
                        </TouchableOpacity>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider topDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title>Release date:</ListItem.Title>
                        <ListItem.Subtitle>{releaseDate}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider topDivider theme={theme}>
                    <ListItem.Content>
                        <ListItem.Title>Land:</ListItem.Title>
                        <ListItem.Subtitle>{country}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider topDivider theme={theme}>
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
