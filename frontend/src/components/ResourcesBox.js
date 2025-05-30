// Box on the home screen to access the resources screen
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResourcesBox = () => {
  const navigation = useNavigation();

  const goToResourcesScreen = () => {
    navigation.navigate('Resource');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToResourcesScreen}>
      <Text style={styles.title}>📚 Recursos Disponibles</Text>
      <Text style={styles.subtitle}>Pulsa para acceder a recursos y guías de ayuda</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#A68FC9',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default ResourcesBox;
