import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
//screens
import ApiScreen from "./src/screens/ApiScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import CounterScreen from "./src/screens/componentScreens/CounterScreen";

const BottomTab = createBottomTabNavigator()
const Stack = createStackNavigator()

//nested screens
const ApiS = ()=>(
    <Stack.Navigator>
        <Stack.Screen
            name="HomeApi"
            component={ApiScreen}
            options={{
                title: "API"
            }}
        />
    </Stack.Navigator>
)

const ComponentS = ()=>(
    <Stack.Navigator>
        <Stack.Screen
            name="HomeComponent"
            component={ComponentScreen}
            options={{
                title: "Component"
            }}
        />
        <Stack.Screen name="Counter" component={CounterScreen}/>
    </Stack.Navigator>
)

const App = ()=>(
    <NavigationContainer>
        <BottomTab.Navigator
            tabBarOptions={{
                activeTintColor: '#130f40',
                inactiveTintColor: '#95afc0',
                showLabel: false
            }}
        >
            <BottomTab.Screen
                name="Api"
                component={ApiS}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="API" color={color} size={size}/>
                    )
                }}
            />
            <BottomTab.Screen
                name="Component"
                component={ComponentS}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="react" color={color} size={size}/>
                    )
                }}
            />
        </BottomTab.Navigator>
    </NavigationContainer>
)

export default App
