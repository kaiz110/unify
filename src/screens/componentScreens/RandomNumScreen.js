import React,{useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {TextInput, Button,Text, HelperText} from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get('window').width

const RandomNumScreen = ()=>{
    const [start,setStart] = useState('0')
    const [end,setEnd] = useState('0')
    const [result,setResult] = useState(0)

    return <View style={styles.container}>
        <View style={styles.input}>
            <TextInput
                style={styles.textInput}
                label="Start Number"
                mode="outlined"
                keyboardType="number-pad"
                value={start.toString()}
                onChangeText={setStart}
            />
            <Text style={styles.dash}> - </Text>
            <TextInput
                style={styles.textInput}
                label="End Number"
                mode="outlined"  
                keyboardType="number-pad" 
                value={end.toString()}
                onChangeText={setEnd}         
            />
        </View>
        <HelperText type="error" visible={!check(start,end)}>
            Both number must be an integer
        </HelperText>
        <Text style={{alignSelf: 'center',fontSize: 54}}>{result}</Text>
        <Button 
            style={styles.btn}
            icon="dice-multiple"
            mode="contained"
            onPress={()=>{
                if(check(start,end)){
                    const res = randomRange(start,end)
                    setResult(res)
                }
            }}
        > Generate </Button>
    </View>
}

function check (x,y) {
    return /^-?\d+$/.test(x) && /^\d+$/.test(y)
}

function randomRange(from ,to){
    const start = parseInt(from)
    const end = parseInt(to)

    const gap = end - start
    const ran = Math.random() * (gap+1) + +start
    return Math.floor(ran)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 75
    },
    textInput: {
        marginHorizontal: 10,
        width: SCREEN_WIDTH/2.8
    },
    dash: {
        fontSize: 45,
        alignSelf: 'center'
    },
    btn: {
        backgroundColor: 'orange',
        marginHorizontal: 64,
        marginTop: 45
    }
})

export default RandomNumScreen