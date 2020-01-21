import React from 'react';
import { 
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
 } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

IceCreamScreen.navigationOptions = {
  headerStyle: { 
    height: 75,
    borderBottomWidth: 0  
  },
  headerTitle: () => {
    return (
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.headingText}>tiger</Text>
        <Ionicons
          name={'ios-ice-cream'}
          size={56}
          style={{ padding: 5, flex: 3, textAlign: 'center'}}
          color={'black'}
          />
          <Text style={styles.headingText}>treats</Text>
      </View>
    )
  },  
};

export default function IceCreamScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} /> */}
      {/* <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} /> */}
      {/* <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} /> */}
      {/* <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} /> */}
      {/* <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} /> */}
      {/* <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} /> */}
      {/* <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} /> */}
      {/* <Image source={require('../assets/images/cuba.jpg')} style={{ height: 300, width: '90%', margin: '5% 2.5%', resizeMode: 'cover' }} /> */}
    </ScrollView>
  );
}

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
  },
});
