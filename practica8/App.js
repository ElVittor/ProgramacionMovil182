import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground, SectionList } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [buscarTexto, setBuscarTexto] = useState('');
  const [mostrarTodo, setMostrarTodo] = useState(false);

  const confirmacion = () => {
    Alert.alert('Formulario Enviado', `Nombre: ${nombre}`);
  };

  const peliculas = [
    {
      title: "Pelis de SI-FI",
      data: [
        { key: 1, name: 'La batalla de los Mundos' },
        { key: 2, name: 'El 5° Elemento' },
        { key: 3, name: 'IA' },
        { key: 4, name: 'El Hombre bicentenario' },
        { key: 5, name: 'Yo Robot' },
        { key: 6, name: 'Blade Runner' },
        { key: 7, name: 'Blade Runner: 2045' },
        { key: 8, name: 'Passengers' },
        { key: 9, name: 'Halo: Reach' },
        { key: 10, name: 'Species' },
        { key: 11, name: 'Interestellar' },
      ]
    },
    {
      title: 'Pelis de Terror',
      data: [
        { key: 1, name: 'Silent Hill' },
        { key: 2, name: 'Megan' },
        { key: 3, name: 'Anbel' },
        { key: 4, name: 'Nosferatu' },
        { key: 5, name: 'Rec.' },
        { key: 6, name: 'Saw' },
        { key: 7, name: 'Un lugar en silencio' },
        { key: 8, name: 'Cretters' },
        { key: 9, name: 'The Shinig' },
        { key: 10, name: 'Misery' },
        { key: 11, name: 'Hereditary' },
      ]
    },
    {
      title: 'Pelis de Acción',
      data: [
        { key: 1, name: '007' },
        { key: 2, name: 'Terminator' },
        { key: 3, name: 'Terminator 2' },
        { key: 4, name: 'Alien' },
        { key: 5, name: 'El día después de mañana.' },
        { key: 6, name: 'Misión Imposible' },
        { key: 7, name: 'Bad Boys' },
        { key: 8, name: 'El patriota' },
        { key: 9, name: 'Jack Ryan' },
        { key: 10, name: 'Salvando al Soldado Ryan' },
        { key: 11, name: 'Glory Bastards' },
      ]
    }
  ];

  const filterPeliculas = () => {
    if (mostrarTodo) {
      return peliculas;
    }
    if (buscarTexto === '') {
      return [];
    }
    return peliculas.map(section => ({
      title: section.title,
      data: section.data.filter(item => item.name.toLowerCase().includes(buscarTexto.toLowerCase()))
    })).filter(section => section.data.length > 0);
  };

  const handleBuscar = () => {
    if (buscarTexto === '') {
      setMostrarTodo(true);
    } else {
      setMostrarTodo(false);
    }
  };

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title1}>Piratrix</Text>
        <Text style={styles.title2}>Buscador de Películas</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setBuscarTexto(text);
            setMostrarTodo(false);  // Reiniciar mostrarTodo cuando se ingresa texto
          }}
          value={buscarTexto}
          placeholder='Buscador de películas'
        />
        <Button title="Buscar" onPress={handleBuscar} color="#FF0000" />
        { (buscarTexto !== '' || mostrarTodo) && (
          <SectionList
            sections={filterPeliculas()}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
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
    paddingTop: 500,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: 5,
    borderRadius: 10,
  },
  title1: {
    fontSize: 25,
    color: 'purple',
    textAlign: 'center',
    marginBottom: 10,
  },
  title2: {
    fontSize: 20,
    textAlign: 'center',
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
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
  }
});
