import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.icon} source={require('../../assets/ayto_motril.png')} />
     <View style={styles.box}>
      <View style={styles.header}>
        <Text style={styles.title}>Hola, ¿en qué puedo ayudarte?</Text>
        <Text style={styles.intro}>Un espacio seguro para obtener información, recursos y apoyo a través de nuestra asistente IA.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Necesito información</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Quiero denunciar un abuso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Recursos</Text>
        </TouchableOpacity>
       </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
   icon: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  box: {
    width: '90%',
    backgroundColor: '#6A3DA6',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    width: 130,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  intro: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 5,
  },
  buttonContainer: {
    width: '95%',
  },
  button: {
    backgroundColor: '#A68FC9',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default HomeScreen;
