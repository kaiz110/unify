import 'react-native-gesture-handler';
import React from 'react';
import {UIManager} from 'react-native';
import {Provider as PaperProvider,BottomNavigation} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
//screens
import ApiScreen from "./src/screens/ApiScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import CounterScreen from "./src/screens/componentScreens/CounterScreen";
import RandomNumScreen from "./src/screens/componentScreens/RandomNumScreen";
import RectangleScreen from "./src/screens/componentScreens/RectangleScreen";
import SlideScreen from "./src/screens/componentScreens/SlideScreen";
import TimerScreen from "./src/screens/componentScreens/TimerScreen";
import LoveCalcScreen from "./src/screens/apiScreens/LoveCalcScreen";

const BottomTab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

// ui for layout animation on android
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

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
        <Stack.Screen name="Rectangle" component={RectangleScreen}/>
        <Stack.Screen name="Slide" component={SlideScreen}/>
        <Stack.Screen name="Timer" component={TimerScreen}/>
    </Stack.Navigator>
)

const App = ()=>(
    <NavigationContainer>
        <BottomTab.Navigator
            initialRouteName="Api"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            shifting
            barStyle={{ backgroundColor: '#694fad' }}
        >
            <BottomTab.Screen
                name="Api"
                component={ApiS}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="API" color={color} size={24}/>
                    ),
                    tabBarColor: '#00b894'
                }}
            />
            <BottomTab.Screen
                name="Component"
                component={ComponentS}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="react" color={color} size={24}/>
                    ),
                    tabBarColor: '#6c5ce7'
                }}
            />
        </BottomTab.Navigator>
    </NavigationContainer>
)

export default ()=>{
    return <PaperProvider>
        <App/>
    </PaperProvider>
}
