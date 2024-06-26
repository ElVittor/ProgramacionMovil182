import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react'; /* para manejo de estados de componentes */
/* Use efect se usa para operaciones de las que no conocemos el resultado como la consulta a una api o BD */
export default function App() {
  const [user,setUser] = useState([]) /* Para asignar usuarios y setearlos */
  const [loading, setLoading] = useState(true) /* para asignar tiempos de espera de la carga */

  useEffect(()=>{ /* usa dos parametros, funcion y arreglo */
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data=>{setUser(data), setLoading(false)} )
  }, [])  

/* el activity indicator usa solo 2 propiedades tamaño y color, es el spin que gira */
  if(loading){
    return <View style={styles.center} > 
      <ActivityIndicator size='large' color='#0000ff' />
      <Text> Carganding ... </Text>
    </View>
  }

  return (
  <View style={styles.container}>
    <FlatList 
    data={user}
    renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
     />
    <StatusBar style="auto" />
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
item:{
  padding:10,
  fontSize:24,
  height:50,
  borderColor: 'black',
  borderBottomWidth:1,
},
center:{
flex:1,
alignItems:'center',
justifyContent:'center'
}


});
