import React from 'react';
import {View,Text, ScrollView, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import styleNavDrawer from '../styles/styleNavDrawer';


const AppButton = ({key, onPress, title}) => (
  <TouchableOpacity
    
    onPress={onPress}
    style={[
      styles.appButtonContainer
    ]}
  >
    <Text style={[styles.appButtonText]}>
      {title}
      {key}
    </Text>
  </TouchableOpacity>
);


class Buttons extends React.Component {
    state = {
        name:'car1'
    }
    constructor(navigation, name){
      this.navigation = navigation
      this.name = name
    }
    render() {
        return (
           <AppButton key={this.name} title={this.name} onPress={() => this.navigation.navigate('Screen1', {CarName: this.name })} />
          
        );
    }                                                                             

}


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


export default Buttons;