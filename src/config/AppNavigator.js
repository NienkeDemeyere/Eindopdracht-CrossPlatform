import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import ArtistDetail from "../screens/ArtistDetail";
import SongDetail from "../screens/SongDetail";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings";
import App from "../../App";
import lightmodeStyle from "../styles/lightmode.style";

const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();

const AppNavigator = (props) => {
    const mode = props.mode
    const setMode = props.setMode 
    return (
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name='Home' initialParams={{mode: mode, setMode: setMode}} component={HomeNavigator} options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                        name= 'home'
                        color ={color} size={size}/>
                    ),
                }}>

                </Tab.Screen>
                <Tab.Screen name='Settings'  initialParams={{mode: mode, setMode: setMode}} component={Settings} options={{
                    tabBarLabel: "Instellingen",
                    headerShown: true,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                        name= 'settings'
                        color ={color} size={size}/>
                    )
                    
                }}>
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
    
}


const HomeNavigator = (props) => {
    const mode = props.route.params.mode;
    const setMode = props.route.params.setMode;
    console.log(props)
    
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen initialParams={{mode: mode, setMode: setMode}} name="Home" component={Home}/>
            <StackNavigator.Screen initialParams={{mode: mode, setMode: setMode}} name="ArtistDetail" component={ArtistDetail}/>
            <StackNavigator.Screen initialParams={{mode: mode, setMode: setMode}} name="SongDetail" component={SongDetail}/>
            <StackNavigator.Screen initialParams={{mode: mode, setMode: setMode}} name="Settings" component={Settings}/>
        </StackNavigator.Navigator>
    )
}
export default AppNavigator;