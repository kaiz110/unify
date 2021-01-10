import React,{useState} from 'react';
import {StyleSheet, View,KeyboardAvoidingView,Dimensions,Keyboard} from 'react-native';
import {TextInput,Button,Text,Headline,Snackbar} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient'
import axios from 'axios';

const SCREEN_HEIGHT = Dimensions.get('window').height

const LoveCalcScreen = ()=>{
    const [res,setRes] = useState(null)
    const [loading,setLoading] = useState(false)
    const [snack,setSnack] = useState(false)
    const [name1,setName1] = useState('')
    const [name2,setName2] = useState('')

    //submit button
    const send = (name1,name2)=>{
        //axios config
        const options = {
            method: 'GET',
            url: 'https://love-calculator.p.rapidapi.com/getPercentage',
            params: {fname: name1, sname: name2},
            headers: {
                'x-rapidapi-key': '627c2cc49bmsh2b6cf1aba95744bp1773bcjsn2f12dc4bc572',
                'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
            }
        };

        setLoading(true)
        axios.request(options).then(function (response) {
            setRes(response.data)
            setLoading(false)
        }).catch(function (error) {
            console.error(error)
        })
    }

    return <View style={{flex: 1}}>
        <KeyboardAvoidingView 
            style={{flex: 1}} 
            behavior="position" 
            keyboardVerticalOffset={10}
        >
            <View style={styles.box}>
                <LinearGradient
                    colors={["rgba(255, 166, 166,0.90)", "transparent"]} 
                    style={{flex: 1,alignItems:'center',borderRadius: 7}}
                >
                {res?
                <View style={{alignItems: 'center'}}>
                    <View style={styles.perc}>
                        <Text style={styles.percText}>{res.percentage}%</Text>
                    </View>
                    <Headline style={styles.result}>{res.result}</Headline>
                </View>
                :null}
                </LinearGradient>
            </View>

            <TextInput
                style={styles.txtInput}
                label="Your First Name"
                value={name1}
                onChangeText={setName1}
            />
            <TextInput
                style={styles.txtInput}
                label="His/Her First Name"
                value={name2}
                onChangeText={setName2}
            />
            
            <Button
                loading={loading}
                onPress={()=>{
                    Keyboard.dismiss()
                    if(name1&&name2){
                        send(name1,name2)
                    }else{
                        setSnack(true)
                    }
                }}
            > Submit </Button>

        </KeyboardAvoidingView>

        <Snackbar
            visible={snack}
            onDismiss={()=>setSnack(false)}
            duration={1000}
            style={{flex: 1}}
        > Error </Snackbar>
    </View>
}


const styles = StyleSheet.create({
    box:{
        borderRadius: 7,
        margin : 15,
        marginBottom: 45,
        height: SCREEN_HEIGHT/3,
        backgroundColor: 'red'
    },
    perc:{
        flex:3,
        justifyContent: 'center'
    },
    percText:{
        fontSize: 78,
        color: 'white'
    },
    result:{
        flex:1,
        color: 'white',
        justifyContent: 'center'
    },
    txtInput: {
        marginHorizontal: 7
    }
})

export default LoveCalcScreen