// Box with the first buttons on the home screen
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BoxHome = ( {onScrollToResources} ) => {

  const navigation = useNavigation();
  const openChatWithPrompt = (prompt) => {
    navigation.navigate('Chat', { initialPrompt: prompt });
  }
    return (
        <View style={styles.box}>
            <View style={styles.header}>
                <Text style={styles.title}>Hola, ¿en qué puedo ayudarte?</Text>
                <Text style={styles.intro}>Un espacio seguro para obtener información, recursos y apoyo a través de nuestra asistente IA.
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => openChatWithPrompt('Necesito información')}>
                <Text style={styles.buttonText}>Necesito información</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress= {() => openChatWithPrompt('Quiero hablar con alguien')}>
                <Text style={styles.buttonText}>Quiero denunciar un abuso</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ onScrollToResources }>
                <Text style={styles.buttonText}>Recursos</Text>
                </TouchableOpacity>
            </View>    

        </View>
    );
}

const styles = StyleSheet.create({
    box: {
    width: '100%',
    backgroundColor: '#6A3DA6',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginVertical: 10
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
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
})

export default BoxHome;