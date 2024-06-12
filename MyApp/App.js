import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

const Texto=({contenido, onPress})=>{
  return (<Text onPress={onPress}>{contenido}</Text>)
}

export default function App() {
  const [contenido, setContenido]= useState('Hola Mundo')
  const actualizarContenido=()=>{setContenido('State actualizó este texto')};
  return (
    <View style={styles.container}>
      
      <Texto contenido={contenido} onPress={actualizarContenido} />
      <Texto contenido={contenido} onPress={actualizarContenido} />

      <Button title="presioname" color ="#000000" onPress={actualizarContenido}> </Button>
      <StatusBar style="auto" />
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
});
