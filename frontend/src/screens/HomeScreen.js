import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
     <TopBar  onHelpPress={() => navigation.navigate('Help')} />

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
    height: '100%',
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',    
  },
  box: {
    width: '90%',
    height: '50%',
    backgroundColor: '#6A3DA6',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    position: 'absolute',
    top: 80
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
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
    marginTop: 10,
    marginBottom: 10,
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
  chatContainer: {
    width: '90%',
    height: '30%',
    backgroundColor: '#6A3DA6',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginTop: 500,
  },
  chatTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default HomeScreen;
