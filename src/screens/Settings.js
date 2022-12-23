import React from "react";
import { useState, useEffect } from "react";

import { View, StyleSheet, Text, Button } from "react-native";
import { Switch } from "react-native-elements";

import { EventRegister } from 'react-native-event-listeners';
import favorietContext from "../config/favorietContext";

import themeStyle from "../styles/theme.style";
import themeContext from "../styles/themeContext";
import { useContext } from "react";

const Settings = () => {
    const theme = useContext(themeContext)
    const favoriet = useContext(favorietContext)

    console.log(favoriet)

    const [mode, setMode] = useState(false)
    
    const styles = StyleSheet.create({
        title:{
            fontSize: themeStyle.FONT_SIZE_TITLE,
            alignSelf: 'center',
            fontWeight: themeStyle.WEIGHT_TITLE,
            paddingBottom: themeStyle.PADDING_BOTTOM,
            color: theme.SECONDARY_COLOR
        },
        subtitle:{
            fontSize: themeStyle.FONT_SIZE_SUBTITLE,
            color: theme.SECONDARY_COLOR,
            backgroundColor: theme.PRIMARY_COLOR
        },
        view:{
            padding: themeStyle.PADDING,
            backgroundColor: theme.PRIMARY_COLOR,
            color :theme.PRIMARY_TEXT_COLOR,
            width: '100%',
            height: '100%'
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
        
    })
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Beheer hier je instellingen</Text>
            <Text style={styles.text}>{mode == true ? "Lightmode" : "Darkmode"}</Text>
            <Switch value={mode} onValueChange={(value)=>{
                setMode((value)=> !value)
                EventRegister.emit("changeTheme", value)}}/> 
            <Text style={styles.subtitle}>Jouw lievelingsliedje:</Text>
            {favoriet != undefined ? <Text style={styles.text}>Lievelingsliedje: {favoriet.trackName} van {favoriet.artistName}</Text> : <Text style={styles.text}>Je hebt nog geen lievelingsliedje gekozen</Text>}
            
        </View>
        
    )
    
}
export default Settings;