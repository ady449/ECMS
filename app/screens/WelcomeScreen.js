import React from 'react';
import {View,Text, ScrollView, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import styleNavDrawer from '../styles/styleNavDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import ViewCar from './ViewCar';
import SetTemp from './SetTemp';
import styles from "../styles/styleWelcomeS";
// import cryp from '../App.js'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AppButton = ({onPress, title}) => (
  <TouchableOpacity
    
    onPress={onPress}
    style={[
      styles.appButtonContainer
    ]}
  >
    <Text style={[styles.appButtonText]}>
      {title}
      
    </Text>
  </TouchableOpacity>
);

// function ButtonsPrint({navigation}){

//     const cars = ["car 1", "car 2", "car 3", "car 4", "car 5", "car 6"];
    
//   return(
//     // buttoncar
//     cars.map((car, i) =><AppButton key={i} title={car} onPress={() => navigation.navigate('Screen1', {CarName: {car} } )} /> )
//   )    

// }

// rsf


function WelcomeScreen({ navigation }) {
    // const mysql = require('mysql2');
    // const pool = mysql.createConnection({
    //   host     : 'localhost', // Your connection adress (localhost).
    //   user     : 'root',     // Your database's username.
    //   password : '',        // Your database's password.
    //   database : 'ecms'   // Your database's name.
  
    // });
    // pool.connect();
    // pool.query('select nume from cars', (err, result, fields)=>{
    //   console.log(result);
    //   });
    // pool.end();
    const cars = ["car 1", "car 2", "car 3", "car 4", "car 5", "car 6"];

    return (
     
      <View>
        <ScrollView contentContainerStyle={styles.background} >
            <Text style={styles.TitleText}>
                The list of cars
            </Text>
            {/* {ButtonsPrint({ navigation })} */}
            {/* {cars.map(car =><AppButton key={car} title={car} onPress={() => navigation.navigate('Screen1', {CarName: "{car}" })} /> )} */}
          <AppButton key={cars[0]} title={cars[0]} onPress={() => navigation.navigate('Screen1', {CarName: cars[0] , carId:1 })} />
          <AppButton key={cars[1]} title={cars[1]} onPress={() => navigation.navigate('Screen1', {CarName: cars[1] })} />
          <AppButton key={cars[2]} title={cars[2]} onPress={() => navigation.navigate('Screen1', {CarName: cars[2] })} />
          <AppButton key={cars[3]} title={cars[3]} onPress={() => navigation.navigate('Screen1', {CarName: cars[3] })} />
          <AppButton key={cars[4]} title={cars[4]} onPress={() => navigation.navigate('Screen1', {CarName: cars[4] })} />
          <AppButton key={cars[5]} title={cars[5]} onPress={() => navigation.navigate('Screen1', {CarName: cars[5] })} />
        
        </ScrollView>
      </View>
    );
}



const Stack = createStackNavigator();

function App() {
  return (
    // <NavigationContainer theme={styleNavDrawer}>
    <Stack.Navigator  >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="ViewCar" component={ViewCar} />
      <Stack.Screen name="SetTemp" component={SetTemp} />
      
    </Stack.Navigator>
    // </NavigationContainer>
    

  );
}



export default App;