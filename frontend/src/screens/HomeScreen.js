import React, {useRef} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import TopBar from '../components/TopBar';
import ChatBox from '../components/ChatBox';
import BoxHome from '../components/BoxHome';
import ResourcesBox from '../components/ResourcesBox';

const HomeScreen = ({ navigation }) => {
  const scrollViewRef = useRef();
  const boxHomeRef = useRef();

  // Function to scroll to the ResourcesBox
  const scrollToResources = () => {
     boxHomeRef.current?.measureLayout(
      scrollViewRef.current.getInnerViewNode(),
      (x, y) => {
        scrollViewRef.current.scrollTo({ y: y, animated: true });
      }
    );
  };

  return (
     <SafeAreaView style={styles.container}>
      <TopBar />
      <ScrollView style={styles.content} ref={scrollViewRef}>
          <BoxHome onScrollToResources = { scrollToResources }/>
          <ChatBox />
          <ResourcesBox ref={boxHomeRef} />
      </ScrollView>
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
    marginHorizontal: 20,            
    marginTop: 50,            
  },
  
});

export default HomeScreen;
