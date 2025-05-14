import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RoutesScreen = () => {
  return (
    <View style={styles.container}>
         <Text style={styles.titulo}>Oque é uma rota?</Text>
      <View style={styles.containerText}>
      <Text style={styles.text}>Rota é a associação entre um componente e o caminho até ele.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0e0e0',
  },
    containerText: {
    marginTop: 50,
  },
  titulo: {
    fontSize: 25,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default RoutesScreen;