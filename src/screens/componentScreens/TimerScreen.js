import React,{useReducer,useEffect} from 'react';
import {StyleSheet, View, Text,Vibration} from 'react-native';
import {Button} from 'react-native-paper';
import Slider from '@react-native-community/slider';

let _interval

const reducer = (state,action) => {
    switch(action.type){
        case 'update_timer':
            return {...state,timer: action.payload}
        case 'countdown':
            return {...state,timer: state.timer - 0.1}
        case 'is_started':
            return {...state,start: action.payload}
        case 'finished':
            return {...state,finished: action.payload}
        default:
            return state
    }
}

const TimerScreen = ()=>{
    const [state,dispatch] = useReducer(
        reducer,{timer: 0,start: false,finished: false})

    useEffect(()=>{
        // if finished state changed 
        // check finished == true, if it true then exc
        if(state.finished) {
            onStop(dispatch)
            Vibration.vibrate([50,1000])
        }
    },[state.finished])


    return <View>
        <Text style={styles.text}>
            {state.start
                ?state.timer.toFixed(1) // change 0 -> 0.0 when start
                :state.timer
            }
        </Text>

        <Slider
            style={styles.slider}
            value={state.timer}
            onValueChange={val=>dispatch({type: 'update_timer',payload: val})}
            minimumValue={0}
            maximumValue={60}
            step={1}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="#000000"
            tapToSeek //only for ios
            disabled={state.start?true:false}
        />
        <Button 
            disabled={state.timer==0} 
            onPress={()=>{
                if(state.start){
                    onStop(dispatch)
                }else{
                    onStart(state.timer,dispatch) 
                }
            }}
        >
            {state.start?'Stop':'Start'}
        </Button>
    </View>
}

function onStart(timer,dispatch) {
    dispatch({type: 'finished',payload: false})
    dispatch({type: 'is_started',payload: true})

    let count = timer //interval will not update from outside
    _interval = setInterval(()=>{
        if(count>0.1){
            dispatch({type: 'countdown'})
            count-=0.1
            if(count == 0) {dispatch({type: 'finished',payload: true})}
        }else{
            dispatch({type: 'finished',payload: true})
        }
    },100)
}

function onStop(dispatch){
    clearInterval(_interval)
    dispatch({type: 'update_timer',payload: 0})
    dispatch({type: 'is_started',payload: false})
    dispatch({type: 'finished',payload: false})
}

const styles = StyleSheet.create({
    text: {
        fontSize: 74,
        padding: 70,
        alignContent: 'center',
        alignSelf: 'center'
    },
    slider: {
        margin: 10,
        marginBottom: 25
    }
})

export default TimerScreen