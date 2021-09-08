import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScrenn } from '../screens/SettingsScrenn';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBase = () => {

    const {width} =useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown : false,
                drawerType: width>= 768 ? 'permanent' : 'front'
            }}
        >
        <Drawer.Screen name="StackNavigator" options={{title:"Home"}} component={StackNavigator} />
        <Drawer.Screen name="SettingsScrenn" options={{title:"Settings"}} component={SettingsScrenn} />
        </Drawer.Navigator>
    );
}