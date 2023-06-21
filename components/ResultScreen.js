import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = ({ route }) => {
  const { temperature, unit } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{temperature}° {unit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ResultScreen;
