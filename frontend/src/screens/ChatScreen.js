// src/screens/ChatScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Chat</Text>
      <Button
        title="Volver al Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ChatScreen;
