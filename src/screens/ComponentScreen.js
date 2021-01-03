import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const ComponentScreen = ({navigation}) => {
    return <View>
        <Button
            title="counter"
            onPress={()=>navigation.navigate('Counter')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default ComponentScreen