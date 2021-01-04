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
import RandomNumScreen from "./src/screens/componentScreens/RandomNumScreen";
import RateScreen from "./src/screens/componentScreens/RateScreen";
import RectangleScreen from "./src/screens/componentScreens/RectangleScreen";
import SlideScreen from "./src/screens/componentScreens/SlideScreen";
import TimerScreen from "./src/screens/componentScreens/TimerScreen";
import LoveCalcScreen from "./src/screens/apiScreens/LoveCalcScreen";

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
        <Stack.Screen name="Love Calculator" component={LoveCalcScreen}/>
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
        <Stack.Screen name="Random Number" component={RandomNumScreen}/>
        <Stack.Screen name="Rate" component={RateScreen}/>
        <Stack.Screen name="Rectangle" component={RectangleScreen}/>
        <Stack.Screen name="Slide" component={SlideScreen}/>
        <Stack.Screen name="Timer" component={TimerScreen}/>
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
