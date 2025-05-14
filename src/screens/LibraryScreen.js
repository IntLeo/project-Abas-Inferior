import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
         <Text style={styles.titulo}>Como navegar?</Text>
      <View style={styles.containerText}>
      <Text style={styles.text}>Das bibliotecas que utilizamos podemos destacar duas: @react-navigation/native e @react-navigation/bottom-tabs.</Text>
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
    backgroundColor: '#d0d0d0',
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

export default LibraryScreen;