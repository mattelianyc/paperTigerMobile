import React from 'react';
import { 
  ScrollView,
  View, 
  Text,
  Image,
  StyleSheet 
} from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 

ShowsScreen.navigationOptions = {
  headerStyle: { 
    height: 75,
    borderBottomWidth: 0  
  },
  headerTitle: () => {
    return (
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.headingText}>paper</Text>
        <Ionicons
          name={'md-paw'}
          size={56}
          style={{ padding: 5, flex: 3, textAlign: 'center'}}
          color={'black'}
          />
          <Text style={styles.headingText}>tiger</Text>
      </View>
    )
  },  
};

export default function ShowsScreen() {
  return (
    <ScrollView>
      <Image source={require('../assets/images/henny.jpg')} style={styles.backgroundImage}/>
      <Image source={require('../assets/images/group.jpg')} style={styles.backgroundImage}/>
      <Image source={require('../assets/images/thumb.jpg')} style={styles.backgroundImage}/>
      <Image source={require('../assets/images/poster.png')} style={styles.backgroundImage}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '90%',
    marginHorizontal: "5%",
    marginVertical: "2.5%",
    height: 300,
    // flex: 1,
    resizeMode: 'cover',
  },
  headingText: {
    flex: 10,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 36,
    fontFamily: 'Courier'
  }
});
