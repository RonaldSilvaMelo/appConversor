import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ConverterScreen = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const convertToFahrenheit = () => {
    const convertedValue = (parseFloat(celsius) * 9) / 5 + 32;
    setFahrenheit(convertedValue.toFixed(2));
    setKelvin((parseFloat(celsius) + 273.15).toFixed(2));
  };

  const convertToCelsius = () => {
    const convertedValue = ((parseFloat(fahrenheit) - 32) * 5) / 9;
    setCelsius(convertedValue.toFixed(2));
    setKelvin((convertedValue + 273.15).toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de temperatura</Text>
      <Text style={styles.label}>Temperatura em Celsius:</Text>
      <TextInput
        value={celsius}
        onChangeText={(text) => setCelsius(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity onPress={convertToFahrenheit} style={styles.btn}>
        <Text style={styles.btnText}>Converter para Fahrenheit</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Temperatura em Fahrenheit:</Text>
      <TextInput
        value={fahrenheit}
        onChangeText={(text) => setFahrenheit(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity onPress={convertToCelsius} style={styles.btn}>
        <Text style={styles.btnText}>Converter para Celsius</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  btn:{
    backgroundColor: '#35E169',
    padding: 8,
    marginBottom: 20,
    
  },
  btnText:{
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default ConverterScreen;
