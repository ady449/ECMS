import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import WelcomeScreen from "../screens/WelcomeScreen";
import styleNavDrawer from '../styles/styleNavDrawer';
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
// import mysql from "../database/mysql";

function HomePage({ navigation }) {
  return (
    <WelcomeScreen />
  );
}

function Page2({ navigation }) {
  return (
    <Screen1 />
  );
}
function Page3({ navigation }) {
  return (
    <Screen2 />
  );
}

function AddCar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AddCar Screen</Text>

    </View>
  );
}
function DeleteCar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DeleteCar Screen</Text>

    </View>
  );
}


const Drawer = createDrawerNavigator();

class MyDrawer extends React.Component {
  render() {
    return (
    <NavigationContainer theme={styleNavDrawer}>
      <Drawer.Navigator screenOptions={{ headerShown: false}}>
        <Drawer.Screen name="Home" component={HomePage}         /> 
        <Drawer.Screen name="Add Car"  component={AddCar}       />
        <Drawer.Screen name="Delete Car"  component={DeleteCar} />
        
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }
}

export default MyDrawer;
