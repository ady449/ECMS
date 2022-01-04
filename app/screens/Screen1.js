import React from 'react';
import {View,Text, ScrollView, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, TouchableHighlight} from 'react-native';
import Screen2 from "./Screen2";
import ViewCar from './ViewCar';
// import WelcomeScreen from './WelcomeScreen'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SwipeButton from '@dillionverma/react-native-swipe-button';
import styleOutputLabel from '../styles/styleOutputLabel';
import SetTemp from "../screens/SetTemp";
// import SwipeButton from 'rn-swipe-button';

// rsf
function Screen1({route, navigation}) {
    const {CarName, carId } = route.params;
    
    const renderSwipeButton = () => (<SwipeButton />)


    const Stack = createStackNavigator();
    return (
    
      <View style={{flex: 1 }}>
      <ScrollView>
          <AppButton key={carId} title={CarName} s={styles.appButtonContainer} onPress={() => navigation.goBack()} />
          <TouchableHighlight onPress={() => navigation.navigate('Screen2', {CarName: CarName})}>

              <Image style={styles.carimg} source={require("../img/tesla2.png")} />
          
          </TouchableHighlight>
          <SwipeButton Icon={<Text></Text>} onComplete={() => Alert.alert("Car locked")} title="Swipe to unlock the car" height={50} containerStyle={styles.swipebuton}/>
          <AppButton title="View Car" s={styles.appButtonContainer2}  onPress={() => navigation.navigate('ViewCar')}/>
        <View style={{flex: 2 }} >
          <SetTemp/>
        </View>
        
      </ScrollView>
      </View>
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
        elevation: 10,
        backgroundColor: 'rgba(53, 167, 156, 1)',
        borderRadius: 10,
        // padding: 50,
        marginTop: 25,
        marginBottom: 25,
        marginHorizontal: "10%",

        paddingVertical: 30,
        paddingHorizontal: "35%",
    },
    appButtonContainer2: {
        elevation: 8,
        backgroundColor: 'rgba(53, 167, 146, 1)',
        borderRadius: 10,
        // padding: 50,
        marginTop: 25,
        marginBottom: 10,
        marginHorizontal: "20%",
        paddingVertical: 20,
        alignItems: "center"
    },
    appButtonContainer3: {
        elevation: 8,
        backgroundColor: 'rgba(53, 167, 146, 1)',
        borderRadius: 10,
        // padding: 50,
        marginTop: 25,
        marginBottom: 10,
        marginHorizontal: "20%",
        paddingVertical: 20,
        alignItems: "center"
    },
    appButtonText: {
      color: "white",
      fontSize: 17,
      
    },
    dropdownicon: {
      // justityContent: 'flex-end'
      position: 'absolute',
      right: 0,
      margin: 10,
    },
    carimg:{
        width: "100%",
        height: 200,
        resizeMode: "contain",
        // resizeMethod:"resize",
        // position: "fix",
    }
     
    
})

const styles2 = StyleSheet.create({
  appButtonContainer2: {
          elevation: 8,
          backgroundColor: 'rgba(53, 167, 146, 1)',
          borderRadius: 10,
          // padding: 50,
          marginTop: 25,
          marginBottom: 10,
          marginHorizontal: "20%",
          paddingVertical: 20,
          alignItems: "center"
      }

})

const AppButton = ({ onPress, title, s}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.appButtonContainer, styles2.appButtonContainer]}
    
  >
    <Text style={[styles.appButtonText]}>
      {title}
    </Text>
  </TouchableOpacity>
);



export default Screen1;