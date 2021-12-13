import React from 'react';
import {View,Text, ScrollView, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';

// rsf
function Screen1({route, navigation}) {
    const { CarName } = route.params;
    return (
        <>
      {/* <SafeAreaView style={styles.NavBar}>
      <Image style={styles.dropdownicon} source={require("ECMS/app/img/Vector.png") } />
      {/* <Dropdown /> */}
      {/* </SafeAreaView> */} 

      <View>
          <AppButton title={CarName} s={styles.appButtonContainer} />
          <Image style={styles.carimg} source={require("../img/tesla2.png")} />
          <AppButton title="Unlock" s={styles.appButtonContainer2} />
          <AppButton title="View Car" s={styles.appButtonContainer2}/>
          <AppButton title="Set Temp" s={styles.appButtonContainer2}/>
      </View>


        </>
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
    // style={s}
  >
    <Text style={[styles.appButtonText]}>
      {title}
    </Text>
  </TouchableOpacity>
);



export default Screen1;