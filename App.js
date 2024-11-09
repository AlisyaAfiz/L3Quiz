import React, {useState} from 'react';
import {View, ScrollView, Text, Image, TextInput, Button, Alert, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/Ionicons";

const InputBox = ({label, onChangeText})=> {
  return (
      <View>
        <Text>{label}</Text>
        <TextInput style={{borderWidth: 2, borderColor: 'gray', backgroundColor: 'white'}} onChangeText={onChangeText} />
      </View>
  );
};

const styles = StyleSheet.create({
    logoQuiz: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 10
    },
    question: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 2,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        color: 'teal'
    },
    theme: {
        fontSize: 20,
        fontStyle: 'italic',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'teal',
        padding: 5
    }
});

const MyQuiz =() => {
    const [name, setName] = useState('');
    const [qn1, setQn1] = useState('');
    const [qn2, setQn2] = useState('');
    const [qn3, setQn3] = useState('');

    const CountScore =() => {
        let scoreCount = 0;
        if (qn1 === 'Correct') scoreCount += 1;
        if (qn2 === 'Correct') scoreCount += 1;
        if (qn3 === 'Correct') scoreCount += 1;
        if (scoreCount > 1) {
            Alert.alert(`Well done! You got ` + scoreCount + `/3 correct.`);
        } else {
            Alert.alert(`Try again! You got ` + scoreCount + `/3 correct.`);
        }
    };

  return (
      <View style={{ padding: 20, marginTop: 40, marginBottom: 20, backgroundColor: 'lightgray' }}>
          <View style={styles.logoQuiz}>
              <Icon name="logo-apple" size={50} color="teal"/>
              <Text style={{padding: 10, fontWeight: 'bold', color: 'teal', fontSize: 40}}>Logo Quiz</Text>
              <Icon name="logo-facebook" size={50} color="teal"/>
          </View>

          <View style={{marginTop: 20}}>
        <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>
        <Text>Hello, {name}</Text>
      </View>

          <Text style={{fontStyle: 'italic', fontSize: 20, textAlign: 'center', padding: 10}}>Guess the logo!</Text>

        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>

            <View style={styles.question}>
          <Text style={styles.title}>Question 1</Text>
          <Image source={require('./img/instagram.jpg')} style={{width:200, height:200}}/>
                <Text style={styles.theme}>Theme: Social Media</Text>
            <RNPickerSelect
                onValueChange={(value) => setQn1(value)}
                items={[
                    { label: 'Instagram', value: 'Correct' },
                    { label: 'Facebook', value: 'Wrong1' },
                    { label: 'Tiktok', value: 'Wrong2' }
                ]}
            />
            </View>

            <View style={styles.question}>
          <Text style={styles.title}>Question 2</Text>
          <Image source={require('./img/volkswagen.jpg')} style={{width:200, height:200}}/>
                <Text style={styles.theme}>Theme: Vehicles</Text>
            <RNPickerSelect
                onValueChange={(value) => setQn2(value)}
                items={[
                    { label: 'Toyota', value: 'Wrong1' },
                    { label: 'Volkswagen', value: 'Correct' },
                    { label: 'Porsche', value: 'Wrong2' }
                ]}
            />
            </View>

            <View style={styles.question}>
          <Text style={styles.title}>Question 3</Text>
      <Image source={require('./img/google.jpg')} style={{width:200, height:200}}/>
                <Text style={styles.theme}>Theme: Search Engines</Text>
            <RNPickerSelect
                onValueChange={(value) => setQn3(value)}
                items={[
                    { label: 'Yahoo', value: 'Wrong1' },
                    { label: 'Bing', value: 'Wrong2' },
                    { label: 'Google', value: 'Correct' }
                ]}
            />
            </View>

            <View style={{ width: 400, height: 200, marginBottom: 80, marginTop: 10 }}>
            <Button title="Submit" onPress={CountScore} color='teal'/>
            </View>

        </ScrollView>
        </View>
  );
}

export default MyQuiz;
