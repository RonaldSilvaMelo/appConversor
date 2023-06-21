import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const IMCScreen = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [imageSource, setImageSource] = useState(null);

  const calculateIMC = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInM = parseFloat(height) / 100;
      const imc = weightInKg / (heightInM * heightInM);
      setResult(imc.toFixed(2));

      if (imc < 18.5) {
        setImageSource(require('../assets/abaixo.jpg'));
      } else if (imc < 24.9) {
        setImageSource(require('../assets/normal.jpg'));
      } else if (imc < 29.9) {
        setImageSource(require('../assets/acima.jpg'));
      } else {
        setImageSource(require('../assets/obeso.jpg'));
      }
    } else {
      setResult('');
      setImageSource(null);
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Calculador de IMC</Text>
      <Text style={styles.label}>Peso (kg):</Text>
      <TextInput
        value={weight}
        onChangeText={text => setWeight(text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>Altura (cm):</Text>
      <TextInput
        value={height}
        onChangeText={text => setHeight(text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <TouchableOpacity style={styles.btn} onPress={calculateIMC}>
      <Text style={styles.btnText}>Calcular IMC</Text>
    </TouchableOpacity>


      {result ? (
        <>
          <Text style={styles.result}>Seu IMC é: {result}</Text>
          {imageSource && <Image source={imageSource} style={styles.image} />}
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  btn:{
    backgroundColor: '#35E169',
    padding: 8,
    
  },
  btnText:{
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default IMCScreen;
