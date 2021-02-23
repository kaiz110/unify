import React,{useReducer,useEffect} from 'react'
import {StyleSheet, View, Text} from 'react-native'

const reducer = (state,action)=>{
    switch(action.type){
        case 'SECOND_UPDATE':
            return state.map((value,i)=>value=(i==0)?value+1:value)
        case 'CHANGE':
            return state.map((value,i)=>{
                if(i==action.payload-1){
                    return value=0
                }else if(i==action.payload){
                    return value=value+1
                }else{
                    return value
                }
            })
        case 'RESET':
            return [
                action.payload.second,
                action.payload.minute,
                action.payload.hour,
                action.payload.day,
                action.payload.month,
                action.payload.year,
            ]
        default:
            return state
    }
}

const TimeCounter = ({time,run,init})=>{
    const [state,dispatch] = useReducer(reducer,[0,0,0,0,0,0])

    useEffect(()=>{
        if(run){
            dispatch({type: 'SECOND_UPDATE'})
        }
    },[time])

    useEffect(()=>{
        console.log('hey')
        if(run){
            dispatch({type:'RESET',payload: init})
        }
    },[run])

    //second -> minute
    if(state[0]>=60){
        dispatch({type: 'CHANGE',payload: 1})
    } 
    //min->hour
    if(state[1]>=60){
        dispatch({type: 'CHANGE',payload: 2})
    }
    //hour-> day
    if(state[2]>=24){
        dispatch({type: 'CHANGE',payload: 3})
    }
    //day->month
    if(state[3]>=30){
        dispatch({type: 'CHANGE',payload: 4})
    }
    //
    if(state[4]>=12){
        dispatch({type: 'CHANGE',payload: 5})
    }


    return <View>
        <Text>YEAR: {state[5]}</Text>
        <Text>MONTH: {state[4]}</Text>
        <Text>DAY: {state[3]}</Text>
        <Text>HOUR: {state[2]}</Text>
        <Text>MINUTE: {state[1]}</Text>
        <Text>SECOND: {state[0]}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default TimeCounter