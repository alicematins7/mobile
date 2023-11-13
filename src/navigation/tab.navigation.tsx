import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenCamera, ScreenPerfil, LocationScreen, ScreenAcelerometro} from "../screens"
import { colors } from '../styles/colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { AcelerometroScreen } from '../screens/Acelerometro';
type TabParamList = 
 {
  Perfil: undefined
  Camera: undefined
  Location: undefined
  Acelerometro: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}
export function TabNavigation() {
  const Tab = createBottomTabNavigator<TabParamList>();
  return (
    <Tab.Navigator
      screenOptions={ {
        headerStyle:{
            backgroundColor: colors.primary
        },
        headerTintColor: colors.white,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white
      }}    
    >
    <Tab.Screen name="Perfil" component={ScreenPerfil}
      options={{
        tabBarIcon: () => (
            <Ionicons name='person' color={colors.black} size={24} />
        ) 
    }} />
      <Tab.Screen name="Camera" component={ScreenCamera} 
      options={{
        tabBarIcon: () => (
            <EvilIcons name="camera" size={24} color="black" />
        ) 
    }} />
     <Tab.Screen name='Location' component={LocationScreen}
     options={{
      tabBarIcon: () => (
        <Entypo name="location" size={24} color="black" />
      )
      }}/> 
      <Tab.Screen name='Acelerometro' component={AcelerometroScreen}
     options={{
      tabBarIcon: () => (
        <AntDesign name="car" size={24} color="black" />
      )
      }}/> 
    </Tab.Navigator>
  );
}