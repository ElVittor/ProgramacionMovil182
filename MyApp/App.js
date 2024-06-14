import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

const Texto =({estilo})=>{
  const [contenido, setContenido] = useState('Hola Mundo :D');
  const cambiarTexto = () => {
    setContenido('Hola a todos');
  } 
  return (<Text style={[styles.text, estilo]} onPress={cambiarTexto}>{contenido}</Text>);
} 

export default function App() {
  const [contenido, setContenido]= useState('Hola Mundo')
  const actualizarContenido=()=>{setContenido('State actualizó este texto')};
  return (
    <View style={styles.container}>
      
      <Texto estilo={styles.red} />
      <Texto estilo={styles.green} />
      <Texto estilo={styles.blue} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',/* izquieda a derecha */
    justifyContent: 'center',/* trabaja de arriba hacia abajo */
  },
  text:{
    color:'Yellow',
    fontsiSize:25,
    height:150,
    width:150,
  },
red:{
  flex: 2,
  backgroundColor:'red',
},
green:{
  flex: 2,
  backgroundColor:'green',
},
blue:{
  flex: 2,
  backgroundColor:'blue',
},
});
