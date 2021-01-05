import React,{useState} from 'react';
import {StyleSheet, View, Dimensions, LayoutAnimation,TouchableOpacity} from 'react-native';
import {TextInput, Button,Text, HelperText,Snackbar} from 'react-native-paper';

import BoxShow from '../../components/BoxShow';

const SCREEN_WIDTH = Dimensions.get('window').width

//MAIN
const RandomNumScreen = ()=>{
    const [start,setStart] = useState('0')
    const [end,setEnd] = useState('0')
    const [result,setResult] = useState(0)
    const [snack,setSnack] = useState(false)
    const [show,setShow] = useState(false)

    return <View style={styles.container}>
        <BoxShow
            show={show}
            setShow={setShow}
            text={result}
        />

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

        <Button 
            style={styles.btn}
            icon="dice-multiple"
            mode="contained"
            onPress={()=>{
                if(check(start,end) && +start <= +end){
                    const res = randomRange(start,end)
                    setResult(res)
                    LayoutAnimation.configureNext({
                        duration: 500,
                        create: { type: 'linear', property: 'opacity' },
                        update: { type: 'spring', springDamping: 0.4 },
                        delete: { type: 'linear', property: 'opacity' }
                    })
                    setShow(true)
                }else{
                    setSnack(true)
                }
            }}
        > Generate </Button>

        <Snackbar
            visible={snack}
            onDismiss={()=>setSnack(false)}
            duration={2000}
        > Error </Snackbar>
    </View>
}

//FUNCTIONs
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

//STYLEs
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 45
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