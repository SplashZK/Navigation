import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScrenn } from '../screens/SettingsScrenn';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

const MenuInterno = (props : DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View>
                <Image 
                    source={{
                        uri : 'https://media.istockphoto.com/vectors/avatar-5-vector-id1131164548?b=1&k=20&m=1131164548&s=612x612&w=0&h=GKB8fshWs-xI9s5cvTDCuVqEBL7Mdn-yxz7gReaw4fY='
                    }}
                    style = {styles.avatar}
                />
            </View>
        </DrawerContentScrollView>
    )
}

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const {width} =useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown : false,
                drawerType: width>= 768 ? 'permanent' : 'front',
            }}

            drawerContent = { (props) => <MenuInterno {...props}/> }
        >
        <Drawer.Screen name="StackNavigator" component={StackNavigator} />
        <Drawer.Screen name="SettingsScrenn" component={SettingsScrenn} />
        </Drawer.Navigator>
    );
}

