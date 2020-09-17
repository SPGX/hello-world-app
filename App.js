import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import MyButton from './componensts/components.js'

export default function App() {
  const [ input, setInput] = useState('')
  const [color, setColor] = useState('')

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.igeargeek.com/_nuxt/img/835647d.png'}}
        style={styles.logo}
      />
      <Text style={styles.text1}>
        Hello World
      </Text>
      
      <TextInput 
        value={input}
        onChangeText={(text) => { setInput(text) }}
        placeholder=" Input here"
        style={styles.input}
      />
      <StatusBar style="auto"/>

      <Text style={{fontSize: 18, marginTop: 20, color: color}} >{input}</Text>
      <View style={styles.buttonhole}>
        <MyButton title="Red" color="red" onChangeColor={(color) => { setColor(color) }} />
        <MyButton title="Blue" color="blue" onChangeColor={(color) => { setColor(color) }} />
        <MyButton title="Green" color="green" onChangeColor={(color) => { setColor(color) }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 30,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '90%',
  },
  buttonhole: {
    flexDirection: 'row',
    marginTop: '20',
  },
});
