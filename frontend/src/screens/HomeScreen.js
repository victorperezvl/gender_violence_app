import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar';
import ChatBox from '../components/ChatBox';
import BoxHome from '../components/BoxHome';

const HomeScreen = ({ navigation }) => {
  return (
     <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={styles.content}>
        <BoxHome />
        <ChatBox />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between', 
    marginHorizontal: 20,            
    marginVertical: 90,              
  },
  
});

export default HomeScreen;
