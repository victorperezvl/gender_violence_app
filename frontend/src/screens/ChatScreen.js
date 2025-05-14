// src/screens/ChatScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = ({ navigation }) => {
  // Estado para los mensajes
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola, soy tu asistente virtual. ¿En qué puedo ayudarte?', sender: 'bot' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Función para enviar un mensaje
  const sendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Añadir mensaje del usuario
    const newMessage = { id: Date.now(), text: inputMessage, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulación de respuesta del bot (luego se conecta al backend)
    setTimeout(() => {
      const botResponse = { id: Date.now() + 1, text: 'Recibido, ¿quieres saber algo más?', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>💬 Asistente de Apoyo</Text>
      </View>

      <ScrollView style={styles.chatWindow}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.message,
              message.sender === 'user' ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu mensaje..."
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADCF8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6A3DA6',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  chatWindow: {
    flex: 1,
    padding: 10,
  },
  message: {
    maxWidth: '75%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#A68FC9',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F5E8FF',
  },
  messageText: {
    color: '#4A4A4A',
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
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

export default ChatScreen;
