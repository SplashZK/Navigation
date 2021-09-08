import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any>{}

export const Pagina1Screen = ( {navigation}: Props ) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <Button 
                        title="Menu"
                        onPress = {  () => navigation.toggleDrawer()}
                    />
                )
            }
        })
    }, [])

    return (
        <View style = { styles.globalMargin }>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button
                title="Ir a página 2"
                onPress={ () => navigation.navigate('Pagina2Screen') }
            />

            <Text>Navegar con argumentos</Text>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                    style = {{...styles.botonGrande,backgroundColor : '#5856D6'}}
                    onPress = { () => navigation.navigate('PersonaScreen',{
                        id : 1,
                        nombre : 'pedro'
                    }) }
                >
                    <Text style = {styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {{...styles.botonGrande,backgroundColor : '#FF9427'}}
                    onPress = { () => navigation.navigate('PersonaScreen',{
                        id : 2,
                        nombre : 'maria'
                    }) }
                >
                    <Text style = {styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}
