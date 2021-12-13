import React from 'react';
import {View,Text, ScrollView, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import styleNavDrawer from '../styles/styleNavDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import DrawerBar from '../components/DrawerBar'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AppButton = ({ onPress, title, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.appButtonContainer,
      backgroundColor && { backgroundColor }
    ]}
  >
    <Text style={[styles.appButtonText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

function ButtonsPrint({navigation}){

    const cars = ["car 1", "car 2", "car 3", "car 4", "car 5", "car 6"];
    // const buttoncar = [];
    // for (const i of cars ) {
    //   buttoncar.push(<AppButton key={i} title={i} onPress={() => navigation.navigate('Screen1', {CarName: {i} } )} />)
  // }
  return(
    // buttoncar
    cars.map(cars =><AppButton title={cars} onPress={() => navigation.navigate('Screen1', {CarName: {cars} } )} /> )
  )    

}

// rsf
function WelcomeScreen({ navigation }) {
    const cars = ["car 1", "car 2", "car 3", "car 4", "car 5", "car 6"];

    return (
      <>
        <ScrollView contentContainerStyle={styles.background} >
            <Text style={styles.TitleText}>
                The list of cars
            </Text>
            {/* {ButtonsPrint({ navigation })} */}
            {cars.map(i =><AppButton title={i} onPress={() => navigation.navigate('Screen1', {CarName: {i} })} /> )}
        </ScrollView>
      </>
    );
}

const Stack = createStackNavigator();

function App() {
  return (
    // <NavigationContainer theme={styleNavDrawer}>
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="DrawerBar" component={DrawerBar} />

    </Stack.Navigator>
    // </NavigationContainer>
    

  );
}






// rnss
const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgba(222, 242, 241, 1)',
        flexGrow:1, 
        alignItems:'center', 
        justifyContent: 'center'
    },
    TitleText:{ 
        textDecorationLine: 'underline',
        fontSize: 30,
        paddingTop: 30,
        alignSelf: 'center'
    },
    NavBar: {
        with: "100%",
        elevation:8,
        height: 50,
        backgroundColor: 'rgba(43, 122, 120, 1)'
    },
    Button1: {
        color: 'rgba(53, 167, 156, 1)',
        borderWidth: 1,
        position: 'absolute',
        width: 50,
        height: 80,
        borderRadius: 20,
    },
     appButtonContainer: {
        elevation: 8,
        backgroundColor: 'rgba(53, 167, 156, 1)',
        borderRadius: 10,
        // padding: 50,
        marginTop: 25,
        marginBottom: 25,
        marginHorizontal: "20%",

        paddingVertical: 30,
        paddingHorizontal: "25%",
    },
    appButtonText: {
      color: "white",
      fontSize: 17,
    },
    dropdownicon: {
      // justityContent: 'flex-end'
      position: 'absolute',
      right: 0,
      margin: 10
    
    }
     
    
})




export default App;