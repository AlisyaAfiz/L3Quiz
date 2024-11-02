import React, {useState} from 'react';
import {View, ScrollView, Text, Image, TextInput, Button, Alert} from 'react-native';
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
      <View style={{ padding: 20, paddingTop: 50 }}>
          <View style={{ alignItems: 'center', paddingBottom: 20 }}>
        <Text style={{fontWeight: 'bold'}}>
          <Icon name="logo-apple" size={40} color="blue">Logo Quiz
              <Icon name="logo-facebook" size={40} color="blue"/>
          </Icon>
        </Text>
          </View>

        <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>
        <Text>Hello, {name}</Text>

        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          <Text>Question 1</Text>
          <Image source={require('./img/instagram.jpg')} style={{width:200, height:200}}/>
            <RNPickerSelect
                onValueChange={(value) => setQn1(value)}
                items={[
                    { label: 'Instagram', value: 'Correct' },
                    { label: 'Facebook', value: 'Wrong' },
                    { label: 'Tiktok', value: 'Wrong' }
                ]}
            />

          <Text>Question 2</Text>
          <Image source={require('./img/volkswagen.jpg')} style={{width:200, height:200}}/>
            <RNPickerSelect
                onValueChange={(value) => setQn2(value)}
                items={[
                    { label: 'Toyota', value: 'Wrong' },
                    { label: 'Volkswagen', value: 'Correct' },
                    { label: 'Porsche', value: 'Wrong' }
                ]}
            />

          <Text>Question 3</Text>
      <Image source={require('./img/google.jpg')} style={{width:200, height:200}}/>
            <RNPickerSelect
                onValueChange={(value) => setQn3(value)}
                items={[
                    { label: 'Yahoo', value: 'Wrong' },
                    { label: 'Bing', value: 'Wrong' },
                    { label: 'Google', value: 'Correct' }
                ]}
            />
            <View style={{ paddingTop: 20, width: 400, height: 200}}>
            <Button title="Submit" onPress={CountScore}/>
            </View>
        </ScrollView>
        </View>
  );
}

export default MyQuiz;
