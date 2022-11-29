import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/config/AppNavigator';
import themeStyle from './src/styles/theme.style';
import darkmodeStyle from './src/styles/darkmode.style';
import lightmodeStyle from './src/styles/lightmode.style';
import { useEffect, useState } from 'react';



export default function App() {
  return (
    <AppNavigator></AppNavigator>
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
