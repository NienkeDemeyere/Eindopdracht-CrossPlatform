import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "../screens/Home";
import ArtistDetail from "../screens/ArtistDetail";
import SongDetail from "../screens/SongDetail";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
    return (
            <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeNavigator} options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                        name= 'home'
                        color ={color} size={size}/>
                    ),
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
    )
    
}


const HomeNavigator = () => {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name="Home" component={Home}/>
            <StackNavigator.Screen name="ArtistDetail" component={ArtistDetail} options={({route}) => ({
                title : `Over ${route.params.song.artistName}`
            })}/>

            <StackNavigator.Screen name="SongDetail"  component={SongDetail} options={({route}) => ({
                title : `Over ${route.params.song.trackName} door ${route.params.song.artistName}`
            })}/>
            
            
        </StackNavigator.Navigator>
    )
}
export default AppNavigator;