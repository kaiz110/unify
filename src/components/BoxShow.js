import React from 'react';
import {StyleSheet,View,TouchableOpacity,Dimensions,Text,LayoutAnimation} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const BoxShow = ({show,setShow,text})=>{
    if(show){
        return <View style={styles.box}>
        <View style={styles.inBoxText}>
            <Text style={{fontSize: 54}}>{text}</Text>
        </View>
        <TouchableOpacity 
            style={styles.inBoxIcon} 
            onPress={()=>{
                LayoutAnimation.configureNext(
                    LayoutAnimation.create(200, 'linear', 'opacity')
                )
                setShow(false)
            }}
        >
            <AntDesign name="up" size={18}/>
        </TouchableOpacity>  
        </View>
    }
    return <TouchableOpacity 
            style={styles.arrowDown}
            onPress={()=>{
                LayoutAnimation.configureNext(
                    LayoutAnimation.create(200, 'easeInEaseOut', 'opacity')
                )
                setShow(true)
            }}
        >
            <AntDesign name="down" size={22}/>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    box:{
        backgroundColor: 'orange',
        height: SCREEN_HEIGHT/4,
        width: SCREEN_WIDTH-50,
        alignSelf: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    inBoxText: {
        alignSelf: 'center',
        flex: 9,
        justifyContent: 'center',
    },
    inBoxIcon: {
        alignSelf: 'center',
        padding: 5,
        flex: 1,
    },
    arrowDown: {
        alignSelf: 'center'
    },
}) 

export default BoxShow