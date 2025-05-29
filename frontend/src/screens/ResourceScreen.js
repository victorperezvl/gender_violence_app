import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const ResourceScreen = () => {
  const [showPhones, setShowPhones] = useState(false);
  const [showLaws, setShowLaws] = useState(false);

  const handleCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <View style={styles.container}>
      {/* Botón desplegable de Teléfonos */}
      <TouchableOpacity style={styles.button} onPress={() => setShowPhones(!showPhones)}>
        <Text style={styles.buttonText}>Teléfonos de ayuda</Text>
      </TouchableOpacity>

      {showPhones && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={() => handleCall('016')}>
            <Text style={styles.phone}>📞 016 - Atención a víctimas (Llamar)</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCall('112')}>
            <Text style={styles.phone}>📞 112 - Emergencias</Text>
          </TouchableOpacity>
          <Text style={styles.phone}>📞 Asociación X - 900 123 456</Text>
        </View>
      )}

      {/* Botón de Recursos Legales */}
      <TouchableOpacity style={styles.button} onPress={() => setShowLaws(!showLaws)}>
        <Text style={styles.buttonText}>Recursos legales</Text>
      </TouchableOpacity>

      {showLaws && (
        <View style={styles.dropdown}>
          <Text style={styles.legal}>📘 Ley Orgánica 1/2004 de Medidas de Protección Integral contra la Violencia de Género</Text>
          <Text style={styles.legal}>📘 Información sobre órdenes de alejamiento y medidas cautelares</Text>
          <Text style={styles.legal}>📘 Acceso a asistencia jurídica gratuita</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 70,
  },
  button: {
    backgroundColor: '#6A3DA6',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  dropdown: {
    backgroundColor: '#F3ECF9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  phone: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  legal: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
});

export default ResourceScreen;
