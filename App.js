import React, { Component} from 'react';
import {Text} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen'; 
import Screen1 from './app/screens/Screen1'; 
import Screen2 from './app/screens/Screen2'; 
import MyDrawer from './app/components/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import styleNavDrawer from './app/styles/styleNavDrawer'


function App() {
    return (
      // <NavigationContainer theme={styleNavDrawer}>
        <MyDrawer />
      // {/* </NavigationContainer> */}
      // {/* // <MyDrawer/>
      // // <WelcomeScreen />
      // // <Text>salut</Text> */}
    );

}

export default App;
