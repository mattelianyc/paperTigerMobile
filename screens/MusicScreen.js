import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Ionicons } from '@expo/vector-icons';
export default function MusicScreen() {
  return (
    <ScrollView style={styles.container}>
      
    </ScrollView>
  );
}

MusicScreen.navigationOptions = {
  title: 'Music',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  headingText: {
    fontFamily: 'Courier',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 36,
    fontWeight: "900",
    flex: 10,
  }
});
