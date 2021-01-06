import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const ComponentScreen = ({navigation}) => {
    return <View>
        <Button
            title="counter"
            onPress={()=>navigation.navigate('Counter')}
        />
        <Button
            title="Random Number"
            onPress={()=>navigation.navigate('Random Number')}
        />
        <Button
            title="Rectangle"
            onPress={()=>navigation.navigate('Rectangle')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default ComponentScreen