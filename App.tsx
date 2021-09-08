import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBase } from './src/navigator/MenuLateralBase';
import { MenuLateral } from './src/navigator/MenuLateral';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBase /> */}
      < MenuLateral />
    </NavigationContainer>
  )
}


export default App;
