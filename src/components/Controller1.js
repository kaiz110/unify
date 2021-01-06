import React from 'react';
import {StyleSheet, View, Text,TouchableOpacity,Dimensions} from 'react-native';
import Slider from '@react-native-community/slider';
import {FontAwesome} from '@expo/vector-icons';


const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
// interval when button is pressed
let _interval
const speed = 5
const arrowSize = 55

//M
// dispatch types {ro,hor,ver}, state {fps,...}
// move left right by hor, up down by ver
const Controller1 = ({state,dispatch})=>{
    return <View style={styles.controller}>
    <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={60}
        value={state.fps}
        onValueChange={ val=>dispatch({type: 'fps', payload: val}) }
        step={1}
        minimumTrackTintColor="red"
        maximumTrackTintColor="#000000"
    />

    <View style={styles.btn}>
        <TouchableOpacity 
            onPressIn={()=> onHold(dispatch,'hor',-speed,state.fps) } 
            onPressOut={()=> onRelease()}
        > 
            <FontAwesome name="arrow-left" size={arrowSize}/>
        </TouchableOpacity>

        <View style={styles.btnMid}>
            <TouchableOpacity 
                onPressIn={()=> onHold(dispatch,'ver',-speed,state.fps) } 
                onPressOut={()=> onRelease()}                    
            > 
                <FontAwesome name="arrow-up" size={arrowSize}/>
            </TouchableOpacity>

            <TouchableOpacity
                onPressIn={()=> {onHold(dispatch,'ver',speed,state.fps)} } 
                onPressOut={()=> onRelease()}                
            > 
                <FontAwesome name="arrow-down" size={arrowSize}/>
            </TouchableOpacity>
        </View>

        <TouchableOpacity
            onPressIn={()=> onHold(dispatch,'hor',speed,state.fps) } 
            onPressOut={()=> onRelease()}            
        > 
            <FontAwesome name="arrow-right" size={arrowSize}/>
        </TouchableOpacity>
    </View>
</View>
}

//FUNCs
function onHold(dispatch,type,payload,fps){
    //on tapped
    dispatch({type,payload})
    //hold//fps
    _interval = setInterval(()=>{
        dispatch({type,payload})
    },1000/fps)
}
function onRelease(){
    clearInterval(_interval)
}

//STYLESHEET
const styles = StyleSheet.create({
    controller: {
        borderTopWidth: 2,
        backgroundColor: '#27ae60',
        flex: 1,
        alignItems: 'center'
    },
    slider: {
        width: SCREEN_WIDTH-45,
        height: 50,
        flex:1
    },
    // slider 1 / button group 4
    btn: {
        flexDirection: 'row',
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 7,
        flex: 4,
        alignItems: 'center'
    },
    btnMid: {
        flexDirection: 'column',
        height: SCREEN_HEIGHT*0.21,
        justifyContent: 'space-between',
    }
})

export default Controller1