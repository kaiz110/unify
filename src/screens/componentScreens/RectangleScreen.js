import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Dimensions} from 'react-native';
import Slider from '@react-native-community/slider';
import {FontAwesome} from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const RectangleScreen = ()=>{


    return <View style={{flex: 1}}>
        <View style={styles.display}>
            <View
                style={styles.rectangle}
            />   
        </View>
        
        <View style={styles.controller}>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="red"
                maximumTrackTintColor="#000000"
            />

            <View style={styles.btn}>
                <TouchableOpacity>
                    <FontAwesome name="arrow-left" size={63}/>
                </TouchableOpacity>

                <View style={styles.btnMid}>
                    <TouchableOpacity
                        
                    >
                        <FontAwesome name="arrow-up" size={63}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        
                    >
                        <FontAwesome name="arrow-down" size={63}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <FontAwesome name="arrow-right" size={63}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    //
    display: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rectangle: {
        borderRadius: 5,
        height: 100,
        width: 100,
        backgroundColor: 'red',
    },
    // display flex 3 / controller flex 2
    controller: {
        borderTopWidth: 2,
        flex: 2,
        alignItems: 'center'
    },
    slider: {
        width: SCREEN_WIDTH-45,
        height: 50,
        flex:1
    },
    // slider 1 / button group 4
    btn: {
        flexDirection: 'row',
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 7,
        flex: 4,
        alignItems: 'center'
    },
    btnMid: {
        flexDirection: 'column',
        height: SCREEN_HEIGHT*0.21,
        justifyContent: 'space-between',
    }
})

export default RectangleScreen