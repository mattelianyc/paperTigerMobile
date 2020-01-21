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

NewsScreen.navigationOptions = {
  header: null,
};

export default function NewsScreen() {
  return (
    <>
        <View style={styles.container}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/insta.png')
                : require('../assets/images/insta.png')
            }
            style={styles.welcomeImage}
          />
        </View>
        <View style={styles.body}>
          <Image source={require('../assets/images/flowerz.jpg')} style={styles.backgroundImage}/>
        </View>
    </>
  );
}


const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 30,
  },
  container: {
    flexDirection: 'row',
    marginTop: 25,
  },
  welcomeImage: {
    height: 180,
    flex: 1,
    resizeMode: 'contain',
  },
  body: {
    width: '100%',
    height: '85%',
  },
  backgroundImage: {
    transform: [{ rotate: '245deg'}, {translateY: -24}, {translateX: 10}],
    height: '100%',
    resizeMode: 'contain',
    opacity: 0.275
  },  
});
