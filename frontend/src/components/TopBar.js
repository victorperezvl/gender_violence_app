// Navigation bar at the top of the home screen
import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TopBar = ({ onHelpPress }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.loginButton} onPress={onHelpPress}>
        <Text style={styles.helpButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.helpButton} onPress={onHelpPress}>
        <Text style={styles.loginButtonText}>Ayuda</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 68,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logo: {
    width: 100,
    height: 50,
  },
  helpButton: {
    backgroundColor: '#6A3DA6',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  helpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#6A3DA6',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: -100,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TopBar;
