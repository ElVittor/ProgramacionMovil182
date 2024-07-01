npmimport React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground } from 'react-native';/* agregamos el image para la imagen de fondo */

/* Para Setear las configuraciones iniciales del login */
export default function App() {
  const [nombre, setNombre] = useState('');

  /* Funcion que avienta el alert con la confirmacion de los datos ingresados en los text */
  const confirmacion = () => {
    Alert.alert('Formulario Enviado', `Nombre: ${nombre}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <ImageBackground source={require('./assets/galaxia.jpeg')} style={styles.background}>

      {/* vista de la página de entrada */}
      <View style={styles.container}>
      <Text style={styles.title1}>Piratrix</Text>
        <Text style={styles.title2}>Buscador de Peliculas</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setNombre(text)}
          value={"Titulo de la pelicula"}
        />
        <Button title="Buscar" onPress={confirmacion} color="#FF0000" />
      <SectionList

      sections={[
        {
          title:"Pelis de SI-FI",
          data:[
          {key:1, name:'La batalla de los Mundos'},
          {key:2, name:'El 5° Elemento'},
          {key:3, name:'IA'},
          {key:4, name:'El Hombre bicentenario'},
          {key:5, name:'Yo Robot'},
          {key:6, name:'Blade Runner'},
          {key:7, name:'Blade Runner: 2045'},
          {key:8, name:'Passengers'},
          {key:9, name:'Halo: Reach'},
          {key:10, name:'Species'},
          {key:11, name:'Interestellar'},
          ]
        },
        {
          title:'Pelis de Terror',
          data:[
          {key:1, name:'Silent Hill'},
          {key:2, name:'Megan'},
          {key:3, name:'Anbel'},
          {key:4, name:'Nosferatu'},
          {key:5, name:'Rec.'},
          {key:6, name:'Saw'},
          {key:7, name:'Un lugar en silencio'},
          {key:8, name:'Cretters'},
          {key:9, name:'The Shinig'},
          {key:10, name:'Misery'},
          {key:11, name:'Hereditary'},
          ]
        },
        {
          title:'Pelis de Accion',
          data:[
          {key:1, name:'007'},
          {key:2, name:'Terminator'},
          {key:3, name:'Terminator 2'},
          {key:4, name:'Alien'},
          {key:5, name:'El día despues de mañana.'},
          {key:6, name:'Misión Imposible'},
          {key:7, name:'Bad Boys'},
          {key:8, name:'El patriota'},
          {key:9, name:'Jack Ryan'},
          {key:10, name:'Salvando al Soldado Ryan'},
          {key:11, name:'Glory Bastards'},
          ]
        },
      ]}
      renderItem={({item})=> <Text> {item.name} </Text> }
      renderSectionHeader={({section})=> <Text styles={styles.section} > {section.title} </Text> }
      />
      </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    margin: 20,
    borderRadius: 10,
  },
  title1:{
    fontSize: 25,
    justifyContent: "center",
  },
  title2:{
    fontSize: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  section:{
    fontSize:16,
    fontWeight:'bold',
    paddingTop:5,
    paddingBottom:5,
  }
});
