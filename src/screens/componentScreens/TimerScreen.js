import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text,Vibration} from 'react-native';
import {Button} from 'react-native-paper';
import Slider from '@react-native-community/slider';

const TimerScreen = ()=>{
    const [timer,setTimer] = useState(0) 
    const [start,setStart] = useState(false)
    let _interval


    const onStart = () => {
        _interval = setInterval(()=>{
            console.log('timer'+timer)
            setTimer(timer - 1)
        },1000)
    }
    const stopTimer = () => {
        clearInterval(_interval)
        setTimer(0)
    }

    return <View>
        <Text style={styles.text}>{timer}</Text>
        <Slider
            style={styles.slider}
            value={timer}
            onValueChange={value=>setTimer(value)}
            minimumValue={0}
            maximumValue={60}
            step={1}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="#000000"
            tapToSeek
        />
        <Button 
            disabled={timer==0} 
            onPress={()=>{
                if(start){
                    //stopTimer()
                    setStart(false)
                }else{
                    //onStart() 
                    setStart(true)
                }
            }}
        >
            {start?'Stop':'Start'}
        </Button>
    </View>
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