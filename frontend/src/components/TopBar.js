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

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={onHelpPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onHelpPress}>
          <Text style={styles.buttonText}>Ayuda</Text>
        </TouchableOpacity>
      </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10, 
  },
  button: {
    backgroundColor: '#6A3DA6',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TopBar;

