import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react'; /* para manejo de estados de componentes */

export default function App() {
  const[text, setText] = useState('Dale: ');/* crea un estado con un valor inicial */
  const[submit, setSubmit] = useState('');
  return (
  <View style={styles.container}>
    <FlatList data={[
      {key:1, name: 'Nepomuceno Pámfilo'},
      {key:2, name: 'SkyWalker Luke'},
      {key:3, name: 'Potter Harry'},
      {key:4, name: 'Wayne Bruce'},
      {key:5, name: 'Lane Loise'},
      {key:6, name: 'Flintstone Peter'},
    ]}
    renderItem={(Item)=><Text style={styles.item} > {Item.name} </Text> }
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
  borderColor: 'Pink',
  borderBottomWidth:1,
}

});
