import React from 'react';
import {StyleSheet, ScrollView, Button} from 'react-native';
import {List,Divider} from 'react-native-paper';

const ComponentScreen = ({navigation}) => {
    return <ScrollView>
        <List.Item
            title="Counter"
            left={props=> <List.Icon {...props} icon="counter"/>}
            right={props => <List.Icon {...props} icon="chevron-right"/>}
            onPress={()=>navigation.navigate('Counter')}
        />
        <Divider/>
        <List.Item
            title="Random Number"
            left={props=> <List.Icon {...props} icon="dice-5"/>}
            right={props => <List.Icon {...props} icon="chevron-right"/>}
            onPress={()=>navigation.navigate('Random Number')}
        />
        <Divider/>
        <List.Item
            title="Rectangle"
            left={props=> <List.Icon {...props} icon="rectangle-outline"/>}
            right={props => <List.Icon {...props} icon="chevron-right"/>}
            onPress={()=>navigation.navigate('Rectangle')}
        />
        <Divider/>
        <List.Item
            title="Slide"
            left={props=> <List.Icon {...props} icon="image-area"/>}
            right={props => <List.Icon {...props} icon="chevron-right"/>}
            onPress={()=>navigation.navigate('Slide')}
        />
        <Divider/>
        <List.Item
            title="Timer"
            left={props=> <List.Icon {...props} icon="timer-sand"/>}
            right={props => <List.Icon {...props} icon="chevron-right"/>}
            onPress={()=>navigation.navigate('Timer')}
        />
    </ScrollView>
}

const styles = StyleSheet.create({})

export default ComponentScreen