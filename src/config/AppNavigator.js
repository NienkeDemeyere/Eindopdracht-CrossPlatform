import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import ArtistDetail from "../screens/ArtistDetail";
import SongDetail from "../screens/SongDetail";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeNavigator} options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                        name= 'home'
                        color ={color} size={size}/>
                    )
                }}>

                </Tab.Screen>
                <Tab.Screen name='Settings' component={Settings} options={{
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

const HomeNavigator = () => {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name="Home" component={Home}/>
            <StackNavigator.Screen name="ArtistDetail" component={ArtistDetail}/>
            <StackNavigator.Screen name="SongDetail" component={SongDetail}/>
            <StackNavigator.Screen name="Settings" component={Settings}/>
        </StackNavigator.Navigator>
    )
}

export default AppNavigator;