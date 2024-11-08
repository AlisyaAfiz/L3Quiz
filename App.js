import React, {useState} from 'react';
import {View, ScrollView, Text, Image, TextInput, Button, Alert, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/Ionicons";

const InputBox = ({label, onChangeText})=> {
  return (
      <View>
        <Text>{label}</Text>
        <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
      </View>
  );
};

const styles = StyleSheet.create({
    logoQuiz: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black'
    },
    question: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: 'white',
        marginBottom: 20
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
        <Text style={{fontWeight: 'bold', marginBottom: 10}}>
          <Icon name="logo-apple" size={40} color="teal">Logo Quiz
              <Icon name="logo-facebook" size={40} color="teal"/>
          </Icon>
        </Text>
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
                    { label: 'Facebook', value: 'Wrong' },
                    { label: 'Tiktok', value: 'Wrong' }
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
                    { label: 'Toyota', value: 'Wrong' },
                    { label: 'Volkswagen', value: 'Correct' },
                    { label: 'Porsche', value: 'Wrong' }
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
                    { label: 'Yahoo', value: 'Wrong' },
                    { label: 'Bing', value: 'Wrong' },
                    { label: 'Google', value: 'Correct' }
                ]}
            />
            </View>

            <View style={{ width: 400, height: 200, marginBottom: 70, marginTop: 10 }}>
            <Button title="Submit" onPress={CountScore}/>
            </View>

        </ScrollView>
        </View>
  );
}

export default MyQuiz;
