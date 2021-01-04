import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';

const LoveCalcScreen = ()=>{
    //axios get
    const options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: {fname: 'Alice', sname: 'Kaiz'},
        headers: {
            'x-rapidapi-key': '627c2cc49bmsh2b6cf1aba95744bp1773bcjsn2f12dc4bc572',
            'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return <View>
        <Text>Love Calculator</Text>
    </View>
}

const styles = StyleSheet.create({})

export default LoveCalcScreen