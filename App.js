import { StyleSheet } from 'react-native';
import AppNavigator from './src/config/AppNavigator';
import themeStyle from './src/styles/theme.style';
import darkmodeStyle from './src/styles/darkmode.style';
import lightmodeStyle from './src/styles/lightmode.style';
import { useEffect, useState } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import themeContext from './src/styles/themeContext';
import favorietContext from './src/config/favorietContext';
import { EventRegister } from 'react-native-event-listeners';

export default function App() {
  const [mode, setMode] = useState(false)
  const [favoriet, setFavoriet] = useState()

  useEffect(()=>{
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data)
    })

    return (()=>{
      EventRegister.removeEventListener(eventListener)
    })
  })

  useEffect(()=>{
    let eventListener = EventRegister.addEventListener("changeFavorite", (data)=>{
      setFavoriet(data)
    })
    return (()=>{
      EventRegister.removeEventListener(eventListener)
    })
  })
  return (
    <themeContext.Provider value={mode == true ? darkmodeStyle : lightmodeStyle }>
      <favorietContext.Provider value={favoriet}>
      <NavigationContainer theme={mode == true ? DarkTheme : DefaultTheme}>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
      </favorietContext.Provider>
    </themeContext.Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
