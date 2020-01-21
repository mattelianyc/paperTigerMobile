import React from 'react';
import { 
  ScrollView, 
  Image, 
  StyleSheet,
  View,
  Text
} from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 

ChatScreen.navigationOptions = {
  headerStyle: { 
    height: 75,
    borderBottomWidth: 0  
  },
  headerTitle: () => {
    return (
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.headingText}>paper</Text>
          <Ionicons
            name={'md-heart'}
            size={56}
            style={{ padding: 5, flex: 3, textAlign: 'center'}}
            color={'black'}
          />
        <Text style={styles.headingText}>tiger</Text>
      </View>
    )
  },  
};  
    
export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/nycity.jpg')} style={{ width: '90%', flex: 1, margin: '5%', resizeMode: 'cover' }}/>
      {/* <Image source={require('../assets/images/nycity.jpg')} style={{ width: '90%', flex: 3, margin: '5%', resizeMode: 'cover' }}/>
      <Image source={require('../assets/images/nycity.jpg')} style={{ width: '90%', flex: 2, margin: '5%', resizeMode: 'cover' }}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "5%",
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
