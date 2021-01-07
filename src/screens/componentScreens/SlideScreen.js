import React from 'react';
import {StyleSheet, View, Text,ScrollView,Image,Button} from 'react-native';

import {ImgSource1,ImgSource2} from '../../components/ImageSource';

let _scrollviewDog

const SlideScreen = ()=>{
    return <ScrollView style={{flex: 1}}>
        <View>
            <ScrollView horizontal>
                {ImgSource1.map(value=>(
                    <Image 
                        key={value.key} 
                        style={{width: 150,height: 150}} 
                        source={{uri: value.img}}/>
                ))}
            </ScrollView>
        </View>
        
        <Text style={styles.text}>Dod</Text>
        <View>    
            <ScrollView 
                horizontal 
                ref={view => _scrollviewDog = view}
                >
                    {ImgSource2.map(value=>(
                        <Image 
                            key={value.key} 
                            style={{width: 290,height: 350}} 
                            source={{uri: value.img}}/>
                    ))}
            </ScrollView>
        </View>
        
        <View>    
            <ScrollView horizontal>
                    {ImgSource2.map(value=>(
                        <Image 
                            key={value.key} 
                            style={{width: 80,height: 80}} 
                            source={{uri: value.img}}/>
                    ))}
            </ScrollView>
        </View>
        <Button
            title="scroll to"
            onPress={()=>{
                _scrollviewDog.scrollTo({x: 290,y: 0,animated: true})
            }}
        />
    </ScrollView>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        margin: 10,
    }
})

export default SlideScreen