import React, { Component} from 'react';
import {Text} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen'; 
import Screen1 from './app/screens/Screen1'; 
import Screen2 from './app/screens/Screen2'; 
import MyDrawer from './app/components/DrawerBar';
// import { NavigationContainer } from '@react-navigation/native';
import styleNavDrawer from './app/styles/styleNavDrawer'


function App() {
    return (
      <MyDrawer/>
    );

}

export default App;
