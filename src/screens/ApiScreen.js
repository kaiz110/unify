import React from 'react';
import {StyleSheet, ScrollView, Text,Button} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const ApiScreen = ({navigation}) => {
    return <ScrollView>
        <Card
            style={styles.card}
            elevation={5}
            onPress={()=>navigation.navigate('Love Calculator')}
        >
            <Card.Cover source={{uri: 'https://www.lovecalculator.club/img/love-meter.jpg'}}/>
            <Card.Content>
                <Title>Love Calculator</Title>
                <Paragraph>Enter your name and the name of your partner/lover/crush
                    to find Love compatibility.</Paragraph>
            </Card.Content>
        </Card>

        <Card
            style={styles.card}
            elevation={5}
            onPress={()=>navigation.navigate('Joke')}
        >
            <Card.Cover source={{uri: 'https://img.etimg.com/thumb/msid-74929721,width-640,resizemode-4,imgsize-399979/corona-is-no-joke.jpg'}}/>
            <Card.Content>
                <Title>Joke</Title>
                <Paragraph>Get random jokes from all categories.</Paragraph>
            </Card.Content>
        </Card>
    </ScrollView>
}

const styles = StyleSheet.create({
    card: {
        margin : 7
    }
})

export default ApiScreen