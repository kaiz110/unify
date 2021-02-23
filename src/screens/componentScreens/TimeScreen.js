import React,{useState,useEffect} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import DateTimePicker from 'react-datetime-picker'
import TimeCounter from '../../components/TimeCounter'

const Time = ()=>{
    const [time,setTime] = useState(null)
    const [timeNow, setTimeNow] = useState(null)
    const [calc,setCalc] = useState(false)
    const haveLived = timeNow - Date.parse(time)
    const secS = haveLived/1000
    const dayS = secS/Math.pow(60,2)/24

    //
    const second = Math.floor(secS) % 60
    const minute = Math.floor(secS/60) % 60
    const hour = Math.floor(secS/3600) % 24
    const day = Math.floor(Math.floor(dayS) % 30.445)
    const month = Math.floor(Math.floor(dayS) % 365 / 30) 
    const year = Math.floor(dayS/365)

    useEffect(()=>{
        const inter = setInterval(()=>{
            setTimeNow(Date.now())
        },1000)

        return ()=>clearInterval(inter)
        
    },)

    return <View>
        <Text>Date of birth:</Text>
        <DateTimePicker
            value={time}
            onChange={setTime}
        />
        {!calc 
        ?<Button
            title="calculator"
            onPress={()=>setCalc(true)}
        />
        :<Button
            title="stop"
            onPress={()=>setCalc(false)}
        />
        }
        <TimeCounter 
            time={timeNow}
            run={calc}
            init={{
                second: second,
                minute: minute,
                hour: hour,
                day: day,
                month: month,
                year: year
            }}
        />
    </View>
}

const styles = StyleSheet.create({})

export default Time