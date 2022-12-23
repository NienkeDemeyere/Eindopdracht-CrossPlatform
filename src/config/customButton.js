import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import themeStyle from '../styles/theme.style';
import { useContext } from "react";
import themeContext from '../styles/themeContext';
const CustomButton = ({ children, onPressed, height = 36, style }) => {
  const theme = useContext(themeContext)

  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.SECONDARY_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
      padding : themeStyle.PADDING
    },
    buttonText: {
      fontSize: themeStyle.FONT_SIZE_LARGE,
      color: theme.PRIMARY_COLOR
    }
  });

  return (
    <TouchableHighlight style={[styles.button, { height }, style]} onPress={onPressed}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableHighlight>
  );
};



export default CustomButton;