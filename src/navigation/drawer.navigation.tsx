import React from 'react';
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenCamera, ScreenPerfil } from "../screens"
import { colors } from '../styles/color';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
type DrawerParamList =
  {
    Perfil: undefined
    Camera: undefined
  }
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Perfil'>
export type DrawerTypes = {
  navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation() {
  const Drawer = createDrawerNavigator<DrawerParamList>();
  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: colors.primary

      },
      drawerActiveTintColor: colors.white
    }
    }>
      <Drawer.Screen name="Perfil" component={ScreenPerfil}
        options={{
          drawerIcon: () => (
            <Ionicons name='person' size={24} color={colors.white} />
          )
        }}
      />
      <Drawer.Screen name="Camera" component={ScreenCamera}
        options={{
          drawerIcon: () => (
            <EvilIcons name="camera" size={24} color="white" />
          )
        }}
      />
    </Drawer.Navigator>
  );
} 