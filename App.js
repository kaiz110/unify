import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//

const BottomTab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

//nested screens
const ApiS = ()=>(
    <Stack>
        <Stack.Screen name="" component={} />
    </Stack>
)

const ComponentS = ()=>(
    <Stack>
        <Stack.Screen name="" component={} />
    </Stack>
)

const App = ()=> (
    <BottomTab>
        <BottomTab.Screen name="Api" component={ApiS}/>
        <BottomTab.Screen name="Component" component={ComponentS}/>
    </BottomTab>
)

export default App
