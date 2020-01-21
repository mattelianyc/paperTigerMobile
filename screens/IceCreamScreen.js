import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { Ionicons } from '@expo/vector-icons';

IceCreamScreen.navigationOptions = {
  headerStyle: { 
    height: 75,
    borderBottomWidth: 0  
  },
  headerTitle: () => {
    return (
      <Ionicons
        name={'ios-ice-cream'}
        size={56}
        style={{ padding: 5 }}
        color={'black'}
      />
    )
  },  
};

export default function IceCreamScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} />
      <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} />
      <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} />
      <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} />
      <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} />
      <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} />
      <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} />
      <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
