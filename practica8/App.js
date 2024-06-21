import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground } from 'react-native';/* agregamos el image para la imagen de fondo */

/* Para Setear las configuraciones iniciales del login */
export default function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* Funcion que avienta el alert con la confirmacion de los datos ingresados en los text */
  const confirmacion = () => {
    Alert.alert('Formulario Enviado', `Nombre: ${nombre}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setNombre(text)}
          value={nombre}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <Button title="Guardar" onPress={confirmacion} color="#FF0000" />
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
});
