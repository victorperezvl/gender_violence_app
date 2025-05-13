import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👜 Asistente de Apoyo</Text>
      <View style={styles.chatWindow}>
        <Text style={styles.assistantMessage}>
          Hola, soy tu asistente virtual. Estoy aquí para brindarte información y apoyo. ¿Cómo puedo ayudarte hoy?
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Escribe tu mensaje..." />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EADCF8',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A3DA6',
    marginBottom: 10,
  },
  chatWindow: {
    backgroundColor: '#F5E8FF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  assistantMessage: {
    fontSize: 14,
    color: '#4A4A4A',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  sendButton: {
    backgroundColor: '#6A3DA6',
    padding: 8,
    borderRadius: 50,
    marginLeft: 5,
  },
});

export default ChatBox;
