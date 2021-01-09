import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,FlatList,Dimensions} from 'react-native';
import {Paragraph,Button} from 'react-native-paper';
import axiosRoot from 'axios';


const axios = axiosRoot.create({
    baseURL: 'https://joke3.p.rapidapi.com/v1',
    headers: {
      'x-rapidapi-key': '627c2cc49bmsh2b6cf1aba95744bp1773bcjsn2f12dc4bc572',
      'x-rapidapi-host': 'joke3.p.rapidapi.com'
    }
})  

//Main
const JokeScreen = ()=>{
    const [jokes,setJokes] = useState([])
    const [loading,setLoading] = useState(false)

    const getJoke = async () => {
        let data = []
        try{
            setLoading(true)
            for(let i = 0 ; i < 5 ; i++){
                const response = await axios.get('/joke')
                //data concat resp
                data = [...data,...[response.data]]
            }
            //no duplicate
            data = filterArray([ ...jokes,...data])
            setLoading(false)
            setJokes(data)
        }catch(e) {
            console.log(e.message)
        }
    }

    useEffect(()=>{
        // 1 load
        getJoke()
    },[])

    return <View style={{flex: 1}}>
        {
        jokes &&
            <FlatList
                data={jokes}
                keyExtractor={data=> data.id}
                contentContainerStyle={styles.contain}
                ListFooterComponent={(
                    <Button
                    loading={loading} 
                    onPress={()=>getJoke()}
                    > More </Button>
                )}
                renderItem={({item})=>{
                    return <View style={styles.card}> 
                        <Paragraph style={styles.text}>{item.content}</Paragraph>
                    </View>
                }}
            />
        }
    </View>
}

function filterArray(arr){
    let newArr = []
    for(let i = 0; i< arr.length; i++){
        const found = newArr.find(val => val.content === arr[i].content)

        if(!found)newArr.push(arr[i])
    }
    return newArr
}

//STYLESHEET
const styles = StyleSheet.create({
    contain: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#dedede',
        borderRadius: 7,
        paddingBottom: 15,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 5,
        padding: 7,
        width: Dimensions.get('window').width - 65
    },
    text: {
        alignSelf: 'center',
        fontSize: 19
    }
})

export default JokeScreen