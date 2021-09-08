import React from 'react'
import { Text, ThemeAttributeBackgroundPropType, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RouteStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RouteStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ({route,navigation}:Props) => {
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title : params.nombre
        })
    },[])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
