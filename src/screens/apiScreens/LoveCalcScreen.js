import React,{useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput,Button,Text,Paragraph} from 'react-native-paper';
import axios from 'axios';

const LoveCalcScreen = ()=>{
    const [res,setRes] = useState({})
    const [loading,setLoading] = useState(false)
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

    return <View>
        <Text>Love Calculator</Text>
        <TextInput
            label="Your First Name"
            value={name1}
            onChangeText={setName1}
        />
        <TextInput
            label="His/Her First Name"
            value={name2}
            onChangeText={setName2}
        />
        <Button
            loading={loading}
            onPress={()=>send(name1,name2)}
        > Submit </Button>
        <Paragraph>{`Percentage: ${res.percentage}, ${res.result}`}</Paragraph>
    </View>
}

function send(){

}

const styles = StyleSheet.create({})

export default LoveCalcScreen