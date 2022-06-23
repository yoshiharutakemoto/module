import {NavigationContainer} from '@react-navigation/native';  
import Home from '../screens/Home';
import Home2 from '../screens/Home2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Ioicons from '@expo/vector-icons/Ionicons';

const Stack = createBottomTabNavigator();

export default function Navigation() {
    return (
      <NavigationContainer>
  <Stack.Navigator initialRouteName='Home'
  screenOptions={({route})=>({
    tabBarIcon:({focused,color,size})=>{
        let iconName;

        if(route.name=='Home'){
            iconName="md-home"
        }else{
            iconName="home-outline"
        }
        
        return <Ioicons name={iconName} size={24}/>
    }
  } )}
  >

    <Stack.Screen name = "Home" component={Home}/>
    <Stack.Screen name = "Home2" component={Home2}/>
  </Stack.Navigator>
      </NavigationContainer>
    );
  }