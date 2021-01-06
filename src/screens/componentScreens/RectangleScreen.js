import React,{useReducer} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Dimensions,Pressable} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

import Controller1 from '../../components/Controller1';

const reducer = (state,action) => {
    switch(action.type){
        case 'hor':
            return {...state,transX : state.transX + action.payload}
        case 'ver':
            return {...state,transY : state.transY + action.payload}
        case 'fps':
            return {...state,fps : action.payload}
        default: 
            return state
    }
}

const RectangleScreen = ()=>{
    const [state,dispatch] = useReducer(reducer,{fps: 1, transX: 0, transY: 0})

    return <View style={{flex: 1}}>
        <View style={styles.display}>
            <View
                style={[styles.rectangle,{
                    transform: [
                        {translateX: state.transX},
                        {translateY: state.transY}
                    ]
                }]}
            > 
                <MaterialCommunityIcons name="dog" size={54}/>
            </View>   
        </View>

        <Text style={{marginLeft: 10}}>{`FPS: ${state.fps}`}</Text>
        <Text style={{marginLeft: 10}}>
            {`Screen Width: ${SCREEN_WIDTH}, Screen Height: ${SCREEN_HEIGHT}`}
        </Text>

        <Controller1
            state={state}
            dispatch={dispatch}
        />
    </View>
}



const styles = StyleSheet.create({
    //
    display: {
        height: SCREEN_HEIGHT/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rectangle: {
        borderRadius: 5,
        height: 100,
        width: 100,
        backgroundColor: 'red',
        alignItems:'center',
        justifyContent: 'center'
    },
    
})

export default RectangleScreen