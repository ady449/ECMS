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
import Input1 from "./InputLabel"
function Test({ navigation }) {
  return (
 <Input1 />
  );
}

function HomePage({ navigation }) {
  return (
    <WelcomeScreen />
  );
}

function Page2({ navigation }) {
  return (
    <Screen1></Screen1>
  );
}
function Page3({ navigation }) {
  return (
    <Screen2></Screen2>
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
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomePage}         options={{ headerShown: false }} />
        <Drawer.Screen name="Add Car"  component={AddCar}       options={{ headerShown: false }} />
        <Drawer.Screen name="Delete Car"  component={DeleteCar} options={{ headerShown: false }} />
        <Drawer.Screen name="Screen1"  component={Page2}        options={{ headerShown: false }} />
        <Drawer.Screen name="Screen2"  component={Page3}        options={{ headerShown: false }} />
        <Drawer.Screen name="Test"  component={Test}            options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }
}

export default MyDrawer;
