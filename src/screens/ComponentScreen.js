import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const ComponentScreen = ({navigation}) => {
    return <View>
        <Button
            title="Counter"
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
        <Button
            title="Slide"
            onPress={()=>navigation.navigate('Slide')}
        />
        <Button
            title="Timer"
            onPress={()=>navigation.navigate('Timer')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default ComponentScreen