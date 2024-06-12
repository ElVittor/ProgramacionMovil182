import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Texto=(props)=>{
  const{children}=props
  return (<Text>{children}</Text>)
}

export default function App() {
  return (
    
    <View style={styles.container}>
      
      //ahora puedo escribir y llamar el texto  depende de lo que necesite
      <Texto >Prueba Al Children</Texto>//cuando necesito anidar
      <Texto contenido={"React Native"}/>//Si no necesito anidar
     
      <Button title="presioname" color ="#000000"> </Button>//para el npm

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
