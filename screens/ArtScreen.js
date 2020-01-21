import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Card } from '../components/Card.component';
import { Ionicons } from '@expo/vector-icons';

ArtScreen.navigationOptions = {
  headerStyle: { 
    height: 75,
    borderBottomWidth: 0  
  },
  headerTitle: () => {
    return (
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.headingText}>paper</Text>
          <Ionicons
            name={'md-musical-notes'}
            size={56}
            style={{ padding: 5, flex: 3, textAlign: 'center'}}
            color={'black'}
          />
        <Text style={styles.headingText}>tiger</Text>
      </View>
    )
  },  
};

export default function ArtScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}>
        {/* <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/insta.png')
                : require('../assets/images/insta.png')
            }
            style={styles.welcomeImage}
          />
        </View> */}
        <View style={{flex: 5}}>
        <Card 
          heading={{title: '01_wake_up_my_pilot', subtitle: 'hearts+minds'}} 
          imageSrc={require('../assets/images/group.jpg')} 
          description={'We include SpaceMono because we use it in ArtScreen.js. Feel free toremove this if you are not using it in your app'}
          />
        <Card 
          heading={{title: '02_if_god_is_what_u_want', subtitle: 'hearts+minds'}} 
          imageSrc={require('../assets/images/flowerz.jpg')} 
          description={'We include SpaceMono because we use it in ArtScreen.js. Feel free toremove this if you are not using it in your app'}
          />
        <Card 
          heading={{title: '03_im_so_sorry', subtitle: 'hearts+minds'}} 
          imageSrc={require('../assets/images/henny.jpg')} 
          description={'We include SpaceMono because we use it in ArtScreen.js. Feel free toremove this if you are not using it in your app'}
          />
        <Card 
          heading={{title: '04_AI', subtitle: 'hearts+minds'}} 
          imageSrc={require('../assets/images/blackflowers.png')} 
          description={'We include SpaceMono because we use it in ArtScreen.js. Feel free toremove this if you are not using it in your app'}
          />
        <Card 
          heading={{title: '05_C.H.A.M.P.I.O.N.', subtitle: 'hearts+minds'}} 
          imageSrc={require('../assets/images/thumb.jpg')} 
          description={'We include SpaceMono because we use it in HomeScreen.js. Feel free toremove this if you are not using it in your app'}
            />
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'column'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    // marginBottom: 20,
  },
  welcomeImage: {
    height: 125,
    resizeMode: 'contain',
  },
});
