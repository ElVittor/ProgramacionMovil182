import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';

const Texto=()=>{
  const [contenido, setContenido]= useState('Hola Mundo')
  const actualizarContenido=()=>{setContenido('State actualizó este texto')}
  return (<Text onPress={actualizarContenido}>{contenido}</Text>)
}

export default function App() {
  return (
    
    <View style={styles.container}>
      
      <Texto contenido={"Hola Mundo"}></Texto>//cuando necesito anidar
      <Texto contenido={"React Native"}/>//Si no necesito anidar

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
