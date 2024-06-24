import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, TouchableHighlight, Pressable, ScrollView } from 'react-native';
import React, {useState} from 'react'; /* para manejo de estados de componentes */

/* const Texto =({estilo})=>{
  const [contenido, setContenido] = useState('Hola Mundo :D');
  const cambiarTexto = () => {
    setContenido('Hola a todos');
  } 
  return (<Text style={[styles.text, estilo]} onPress={cambiarTexto}>{contenido}</Text>);
}  */

export default function App() {
  const[text, setText] = useState('Dale: ');/* crea un estado con un valor inicial */
  const[submit, setSubmit] = useState('');
  return (
  <View style={styles.container}>
    <ScrollView styles={styles.ScrollView} >

      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>
      <text>Componente: {submit} </text>

    <Pressable style={({ pressed }) => [{backgroundColor: pressed ? '#0056b3' : '#007BFF'}, styles.button]} onPress={() => { setSubmit(text); alert('Texto Enviado'); }}>
      <View> {}
        <Text>Componente TextInput: {text} </Text>
        <TextInput style={styles.input} placeholder='Soy un Input: ' onChangeText={(t) => setText(t)} value={text} /> {/* crea una linea de entrada de texto */}
        <Button style={styles.buttonText} title='Presionaaaaaaaa!!!!!!' onPress={() => { setSubmit(text); alert('Texto Enviado'); }} />
      </View>
    </Pressable>
    <StatusBar style="auto" />
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  input:{
    height:40,
    width:'80%',
    borderColor:'gray',
    borderBottomWidth:1,
    borderBottomColor:'black',
  },
   button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16, 
  },

  ScrollView:{
    width: Dimensions.get('window').width /* para que se ajuste al ancho de la pantalla independientemente del dispositivo */
  }
});
