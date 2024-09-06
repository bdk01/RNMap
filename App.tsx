/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppRouters from './src/navigators/AppRouters';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';

function App(): React.JSX.Element {
 
  return (
     <GestureHandlerRootView style={{flex: 1}}>
     <Provider store={store}>
       <StatusBar
         barStyle="dark-content"
         backgroundColor="transparent"
         translucent
       />
       <Host>
         <NavigationContainer>
           <AppRouters />
         </NavigationContainer>
       </Host>
     </Provider>
   </GestureHandlerRootView>
  );
}

export default App;
