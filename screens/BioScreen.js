import React from 'react';
import { 
  ScrollView,
  View, 
  Text,
  Image,
  StyleSheet 
} from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 

BioScreen.navigationOptions = {
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

export default function BioScreen() {
  return (
    <ScrollView>      
      <View style={styles.bioWrapper}>
        <Text style={{textAlign: 'center', fontSize: 28, fontWeight: '900'}}>HENNY MACK</Text>
        <Image source={require('../assets/images/henny.jpg')} style={styles.bioImage}/>
        <Text style={styles.bioCaption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
      <View style={styles.bioWrapper}>
        <Text style={{textAlign: 'center', fontSize: 28, fontWeight: '900'}}>MEDITATE</Text>
        <Image source={require('../assets/images/group.jpg')} style={styles.bioImage}/>
        <Text style={styles.bioCaption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
      </View>
      <View style={styles.bioWrapper}>
        <Text style={{textAlign: 'center', fontSize: 28, fontWeight: '900'}}>MATT ELIA</Text>
        <Image source={require('../assets/images/thumb.jpg')} style={styles.bioImage}/>
        <Text style={styles.bioCaption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
      </View>
      <View style={styles.bioWrapper}>
        <Text style={{textAlign: 'center', fontSize: 28, fontWeight: '900'}}>DECLAN SLEEPER</Text>
        <Image source={require('../assets/images/poster.png')} style={styles.bioImage}/>
        <Text style={styles.bioCaption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
      </View>
      <View style={styles.bioWrapper}>
        <Text style={{textAlign: 'center', fontSize: 28, fontWeight: '900'}}>JOHNNY PACIA</Text>
        <Image source={require('../assets/images/thumb.jpg')} style={styles.bioImage}/>
        <Text style={styles.bioCaption}>Lorem ipsum fucking champion, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bioWrapper: {
    display: "flex",
    width: '90%',
    marginHorizontal: "5%",
    marginVertical: 20,
    height: 600,
    // flex: 10,
  },
  bioImage: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  bioText: {
    // width: '100%',
    marginVertical: 20,
    flex: 1,
    maxHeight: 80,
    overflow: 'hidden',
    // resizeMode: 'cover',
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
