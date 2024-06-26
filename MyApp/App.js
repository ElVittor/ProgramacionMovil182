import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import React, {useState} from 'react'; /* para manejo de estados de componentes */

export default function App() {
  const[text, setText] = useState('Dale: ');/* crea un estado con un valor inicial */
  const[submit, setSubmit] = useState('');
  return (
  <View style={styles.container}>
    <SectionList 
      sections={[
        {
          title:'Grupo A',
          data:[
            {key:1, name: 'Nepomuceno Pámfilo'},
            {key:2, name: 'SkyWalker Luke'},
            {key:3, name: 'Potter Harry'},
          ]
        },
        {
          title:'Grupo B',
          data:[
            {key:1, name: 'Wayne Bruce'},
            {key:2, name: 'Lane Loise'},
            {key:3, name: 'Flintstone Peter'},
          ]
        },{
          title:'Grupo C',
          data:[
            {key:1, name: 'Pedro Pedro'},
            {key:2, name: 'Juanito Escarcha'},
            {key:3, name: 'Tony Soprano'},
          ]
        },
      ]}
      renderItem={({item})=> <Text> {item.name} </Text> }
      renderSectionHeader={ ({section})=> <Text style={styles.section} > {section.title} </Text> }

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
},
section:{
fontSize:16,
fontWeight:'bold',
backgroundColor:'#987',
paddingTop:4,
paddingBottom:4,
}

});
