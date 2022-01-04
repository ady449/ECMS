// import React from 'react';
import {View,Text, ScrollView, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import * as React from 'react';
import styleNavDrawer from '../styles/styleNavDrawer';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import styleOutputLabel from '../styles/styleOutputLabel';
import styles from '../styles/styleScreen2'

// rsf
function Screen2({route, navigation}) {
    const {CarName, carId} = route.params;
    return (
      <View style={{flexWrap: 'nowrap'}}>
          <AppButton  title={CarName} s={styles.appButtonContainer} onPress={() => navigation.goBack()}/>
          <Text style={styles.TextStatus}>STATUS</Text>
         <View style={{flexDirection:"row", flexWrap:"wrap"}}>

            <View style={styleOutputLabel.containerStatus}>
            <Text style={styleOutputLabel.Text}>Battery life</Text>
            <OutputLabel text="70%"/>
            </View>

           <View style={styleOutputLabel.containerStatus}>
            <Text style={styleOutputLabel.Text}>Windows</Text>
            <OutputLabel text="closed"/>
            </View>

           <View style={styleOutputLabel.containerStatus}>
            <Text style={styleOutputLabel.Text}>VIN</Text>
            <OutputLabel text="WV123456789101112"/>
            </View>

           <View style={styleOutputLabel.containerStatus}>
            <Text style={styleOutputLabel.Text}>Battery Temp</Text>
            <OutputLabel text="5"/>
            </View>
            <View style={{flexDirection:"row", flexWrap:"wrap", width:"50%",height:"30%"}}>
            <Text style={styleOutputLabel.Text}>Error</Text>
            <OutputLabel text="No Error"/>
            </View>
            <View style={{flexDirection:"row", flexWrap:"wrap",width:"50%", height:"30%" }}>
            <Text style={styleOutputLabel.Text}>ITP</Text>
            <OutputLabel text="O1/01/2023"/>
            </View>
           <View style={styleOutputLabel.containerStatus}> 
            <Text style={styleOutputLabel.Text}>Insurance</Text>
            <OutputLabel text="O1/01/2023"/>
            </View>
            
          </View>
      </View>
    );
}

const OutputLabel = ({text})=>(
    <View style={styleOutputLabel.OutputLabel}>
      <Text style={{fontSize: 16}}>{text}</Text>
      
    </View>
);

//1.9-1




const AppButton = ({ onPress, title, s}) => (
  <TouchableOpacity
    onPress={onPress}
    // style={styles.appButtonContainer}
    style={s}
  >
    <Text style={[styles.appButtonText]}>
      {title}
    </Text>
  </TouchableOpacity>
);



export default Screen2;