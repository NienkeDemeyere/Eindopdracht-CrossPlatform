import React from "react";
import { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import darkmodeStyle from "../styles/darkmode.style";
import lightmodeStyle from "../styles/lightmode.style";
import themeStyle from "../styles/theme.style";
const Settings = (props) => {
    const [mode, setMode] = useState(lightmodeStyle);
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
            <Button style={styles.button} onPress={()=> {
                setMode(darkmodeStyle)
                props.navigation.setParams({mode: darkmodeStyle})
                console.log(props)
                }} title='Dark mode'/>
            <Button style={styles.button} onPress={()=> {
                setMode(lightmodeStyle)
                props.navigation.setParams({mode: lightmodeStyle})
                console.log(props)
            }} title='Light mode'/>
            <Text style={styles.subtitle}>Jouw lievelingsliedje:</Text>
            {favoriet != undefined ? <Text style={styles.text}>Lievelingsliedje: {favoriet.trackName} van {favoriet.artistName}</Text> : <Text style={styles.text}>Je hebt nog geen lievelingsliedje gekozen</Text>}
            
        </View>
        
    )
    
}
export default Settings;