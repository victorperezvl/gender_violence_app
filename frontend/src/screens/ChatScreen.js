import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { sendMessageToAi } from '../services/chatService';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola, soy tu asistente virtual. ¿En qué puedo ayudarte?', sender: 'bot' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newMessage = { id: Date.now().toString(), text: inputMessage, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInputMessage('');

    try {
      const response = await sendMessageToAi(inputMessage);

      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), sender: 'bot', text: response },
      ]);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>💬 Asistente de Apoyo</Text>
      </View>

      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.chatContainer}>
            <ScrollView
              style={styles.chatWindow}
              contentContainerStyle={{ paddingVertical: 10 }}
              showsVerticalScrollIndicator={false}
            >
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
                returnKeyType="send"
                onSubmitEditing={sendMessage}
                multiline={true}
                numberOfLines={1}
                textAlignVertical="top"
              />
              <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                <Ionicons name="send" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    borderRadius: 10,
    height: 40,
    margin: 15, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginTop: 30,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'space-between',
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
    elevation: 1,
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
    margin: 20,
    height: 50,
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    maxHeight: 150, 
    paddingVertical: 5,
  },
  sendButton: {
    backgroundColor: '#6A3DA6',
    padding: 8,
    borderRadius: 50,
    marginLeft: 5,
  },
});

export default ChatScreen;