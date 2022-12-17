import { StyleSheet } from 'react-native';
import AppNavigator from './src/config/AppNavigator';
import themeStyle from './src/styles/theme.style';
import darkmodeStyle from './src/styles/darkmode.style';
import lightmodeStyle from './src/styles/lightmode.style';
import { useEffect, useState } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import themeContext from './src/styles/themeContext';
import { EventRegister } from 'react-native-event-listeners';
export default function App() {
  const [mode, setMode] = useState(false)

  useEffect(()=>{
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data)
    })

    return (()=>{
      EventRegister.removeEventListener(eventListener)
    })
  })
  return (
    <themeContext.Provider value={mode == true ? darkmodeStyle : lightmodeStyle }>
      <NavigationContainer theme={mode == true ? DarkTheme : DefaultTheme}>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
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
