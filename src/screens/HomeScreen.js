import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Como navegar?</Text>
      <View style={styles.containerText}>
        <Text style={styles.text}>
          Toque nas abas abaixo para navegar entre as telas.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
    textAlign: "center",
  },
});

export default HomeScreen;
