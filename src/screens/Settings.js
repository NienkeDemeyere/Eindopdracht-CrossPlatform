import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import darkmodeStyle from "../styles/darkmode.style";
import lightmodeStyle from "../styles/lightmode.style";
import themeStyle from "../styles/theme.style";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = (props) => {
    // const json = localStorage.getItem("site-dark-mode");
    // const isDarkMode = JSON.parse(json);

    // const storeDarkmode = async (value) =>{
    //     await AsyncStorage.setItem('site-dark-mode', value)
        
    //     console.log("success")
    // }
    // const [mode, setMode] = useState(lightmodeStyle);
    // useEffect(()=>{
    //     if(isDarkMode){
    //         setMode(darkmodeStyle);
    //     }
    //     else{
    //         setMode(lightmodeStyle);
    //     }
        
    // },[isDarkMode]);

    // const [darkMode, setDarkMode] = useState(false)
    // useEffect(()=>{
    //     console.log(darkMode);
    //     const jsonStore = JSON.stringify(darkMode);
    //     storeDarkmode(jsonStore)
    //     setDarkMode(darkMode)
    // },[darkMode])

    //in App.js zetten en als state meegeven aan alle childobjecten. niet met local storage werken
   /* const [darkMode, setDarkMode] = useState(false)
    const [mode, setMode] = useState(lightmodeStyle);
    
    useEffect(()=>{
        if(darkMode){
            setMode(darkmodeStyle)
        }
        else{
            setMode(lightmodeStyle)
        }
    }, [darkMode])*/

    /*useEffect(()=>{
        const json = localStorage.getItem("site-dark-mode");
        const isDarkMode = JSON.parse(json);
      
        if(isDarkMode){
          setDarkMode(true)
        }
        else{
          setDarkMode(false)
        }
      }, []);*/
      
        /*useEffect(()=>{
          const json = JSON.stringify(darkMode);
          localStorage.setItem("site-dark-mode",json)
        }, [darkMode]);*/
    const mode = props.route.params.mode;
    const setMode = props.route.params.setMode;

    useEffect(()=>{
        if(mode == darkmodeStyle){
            setMode(darkmodeStyle)
        }
        else{
            setMode(lightmodeStyle)
        }
    }, [mode])
    

    let favoriet = null;
    if(props.route.params != undefined){
        favoriet = props.route.params.song    
    }
    
    const styles = StyleSheet.create({
        title:{
            fontSize: themeStyle.FONT_SIZE_TITLE,
            alignSelf: 'center',
            fontWeight: themeStyle.WEIGHT_TITLE,
            paddingBottom: themeStyle.PADDING_BOTTOM,
            color: mode.SECONDARY_COLOR
        },
        subtitle:{
            fontSize: themeStyle.FONT_SIZE_SUBTITLE,
            color: mode.SECONDARY_COLOR,
            backgroundColor: mode.PRIMARY_COLOR
        },
        view:{
            padding: themeStyle.PADDING,
            backgroundColor: mode.PRIMARY_COLOR,
            color :mode.PRIMARY_TEXT_COLOR,
            width: '100%',
            height: '100%'
        },
        button:{
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
        <View style={styles.view}>
        
            <Text style={styles.title}>Beheer hier je instellingen</Text>
            <Button onPress={()=> setMode(mode == darkmodeStyle ? lightmodeStyle : darkmodeStyle) 
                (console.log(mode))} title={mode==darkmodeStyle ? "Lightmode" : "Darkmode"}></Button>
            <Text style={styles.subtitle}>Jouw lievelingsliedje:</Text>
            {favoriet != undefined ? <Text style={styles.text}>Lievelingsliedje: {favoriet.trackName} van {favoriet.artistName}</Text> : <Text style={styles.text}>Je hebt nog geen lievelingsliedje gekozen</Text>}
            
        </View>
        
    )
    
}
export default Settings;