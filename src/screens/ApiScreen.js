import React from 'react';
import {StyleSheet, View, Text,Button} from 'react-native';

const ApiScreen = ({navigation}) => {
    return <View>
        <Button
            title="Love Calculator"
            onPress={()=>navigation.navigate('Love Calculator')}
        />
        <Button
            title="Joke"
            onPress={()=>navigation.navigate('Joke')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default ApiScreen