import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreensScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nomes das Telas</Text>
          <View style={styles.containerText}>
            <Text style={styles.text}>Perceba que cada aba representa uma tela do aplicativo.</Text>
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
    backgroundColor: '#f0f0f0',
    },
    containerText: {
        marginTop: 50,
    },
    text: {
    fontSize: 18,
    textAlign: 'center',
  },
  titulo: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default ScreensScreen;