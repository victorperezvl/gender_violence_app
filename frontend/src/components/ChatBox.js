//Box on the home screen to access the chat screen
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChatBox = () => {

  const navigation = useNavigation();
  const handleOpenChat = () => {
    navigation.navigate('Chat');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOpenChat}>
        <Text style={styles.title}>💬 Asistente de Apoyo</Text>
        <View style={styles.chatWindow}>
          <Text style={styles.assistantMessage}>
            Hola, soy tu asistente virtual. Estoy aquí para brindarte información y apoyo. ¿Cómo puedo ayudarte hoy?
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Escribe tu mensaje..." />
          <TouchableOpacity style={styles.sendButton} onPress={handleOpenChat}>
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EADCF8',
    borderRadius: 20,
    padding: 10,
    width: '100%',
    height: 240,
    marginVertical: 10,
    flex: 1,
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
    marginBottom: 58,
    flex: 1,
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
    marginTop: 12,
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
