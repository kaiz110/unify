import React,{useState} from 'react';
import {StyleSheet, View, Text,
    ScrollView,Image,Button,FlatList,TouchableOpacity,Dimensions} from 'react-native';

import {ImgSource3,ImgSource2} from '../../components/ImageSource';

const SCREEN_WIDTH = Dimensions.get('window').width
let _flatlistDog


const SlideScreen = ()=>{
    const [select,setSelect] = useState(0)

    const SmallImage = ({item,index})=>(
        <TouchableOpacity 
            style={{
                marginRight: 1,
                borderRadius: 8,
                borderColor:'#c0392b',
                borderWidth: index==select ? 2 : 0     
            }}
            onPress={()=>{
                setSelect(index)   
                scrollTo(index) 
            }}
        >
            <Image 
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 5,
                    opacity: index==select ? 1 : 0.6
                }} 
                source={{uri: item.img}}
            />
        </TouchableOpacity>
    )

    return <ScrollView style={styles.contain}>
        <View>
            <View style={styles.text}>
                <Text style={{fontSize: 21}}>SlideShow 1</Text>   
            </View>
             
            <FlatList
                data={ImgSource3}
                keyExtractor={data=> data.key}
                horizontal
                nestedScrollEnabled
                renderItem={({item})=>(
                    <Image 
                        style={{height: 290,width: 260}} 
                        source={{uri: item.img}}
                    />
                )}
            />
        </View>
        
        <View>
            <View style={styles.text}>
                <Text style={{fontSize: 21}}>SlideShow 2</Text>    
            </View>
                
            <FlatList
                data={ImgSource2}
                keyExtractor={data=> data.key}
                ref={view => _flatlistDog = view}
                horizontal
                nestedScrollEnabled
                renderItem={({item})=>{
                    return <Image style={{height: 380,width: 300}} source={{uri: item.img}}/>
                }}
            />
        </View>
        
        <View>    
            <FlatList
                contentContainerStyle={{alignItems: 'center'}}
                data={ImgSource2}
                keyExtractor={data=> data.key}
                horizontal
                nestedScrollEnabled
                showsHorizontalScrollIndicator
                renderItem={({item,index})=>(
                    <SmallImage 
                        item={item} 
                        index={index}
                    />
                )}
            />
        </View>
    </ScrollView>
}

function scrollTo(index){
    _flatlistDog.scrollToIndex({animated: true,index})
}

const styles = StyleSheet.create({
    contain: {
        backgroundColor:'#fab1a0',
        flex: 1
    },
    text: {
        width: SCREEN_WIDTH - 50,
        margin: 10,
        padding: 5,
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#81ecec'
    }
})

export default SlideScreen