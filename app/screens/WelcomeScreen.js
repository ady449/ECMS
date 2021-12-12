import React from 'react';
import {View,Text, ScrollView, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import styleNavDrawer from '../styles/styleNavDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1';



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


// rsf
function WelcomeScreen({ navigation }) {
    return (
      <>
        <ScrollView contentContainerStyle={styles.background} >
            <Text style={styles.TitleText}>
                The list of cars
            </Text>
            <Button title="test" onPress={() => navigation.navigate("Sc")}/>
            <AppButton title="car 1" onPress={() => navigation.navigate('Screen1', {name: 'car 1'})} />
            <AppButton title="car 2" onPress={() => navigation.navigate('Screen1', {name: 'car 2'})} />
            <AppButton title="car 3" onPress={() => navigation.navigate('Screen1', {name: 'car 3'})} />
            <AppButton title="car 3" onPress={() => navigation.navigate('Screen1')} />
            <AppButton title="car 3" onPress={() => navigation.navigate('Screen1')} />
            <AppButton title="car 3" onPress={() => navigation.navigate('Screen1')} />
        </ScrollView>
      </>
    );
}




const Stack = createNativeStackNavigator();

function App() {
  return (
    
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Screen1" component={Screen1} />
      </Stack.Navigator>


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