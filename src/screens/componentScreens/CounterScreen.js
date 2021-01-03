import React,{useState} from 'react';
import {StyleSheet, View, Text, TextInput,
    TouchableOpacity, Dimensions} from "react-native";
import {AntDesign} from '@expo/vector-icons'

const SCREEN_HEIGHT = Dimensions.get('window').height

const CounterScreen = ()=>{
    const [num,setNum] = useState(0)

    return <View style={styles.contain}>
        <Text style={styles.display}>{num}</Text>

        <View style={styles.valInc}>
            <TouchableOpacity>
                <AntDesign name="minussquareo" size={37}/>
            </TouchableOpacity>
            <Text style={{fontSize: 22,alignSelf: 'center'}}>0</Text>
            <TouchableOpacity>
                <AntDesign name="plussquareo" size={37}/>
            </TouchableOpacity>
        </View>

        <View style={styles.btn}>
            <TouchableOpacity onPress={()=>setNum(num+1)}>
                <AntDesign name="caretup" size={77}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setNum(num-1)}>
                <AntDesign name="caretdown" size={77}/>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#baace3'
    },
    display: {
        fontSize: 75,
        marginHorizontal: 25,
        marginTop: SCREEN_HEIGHT/10,
    },
    valInc: {
        marginTop: SCREEN_HEIGHT/5,
        flexDirection: 'row'
    },
    smallNum: {
        fontSize: 22,
        alignSelf: 'center'
    },
    btn: {
        marginTop: 10,
        alignItems: 'center',
    }
})

export default CounterScreen