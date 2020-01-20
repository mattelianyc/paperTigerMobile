import React from 'react';
import {
  View, 
  Text,
  Image,
  StyleSheet
} from 'react-native';

export function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* HEADER */}
        <View style={styles.heading}>
          <Text style={styles.title} >{props.heading.title}</Text>
          <Text style={styles.subtitle} >{props.heading.subtitle}</Text>
        </View>
        {/* FEATURETTE DIVIDER */}
        <View style={styles.divider}></View>
        {/* CARD CONTENT */}
        <Image source={props.imageSrc} style={styles.image}/>
        {/* <View style={styles.caption}>
          <Text style={styles.description}>{props.description}</Text> 
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    flexDirection: 'column',
    marginBottom: 14,
  },
  card: {
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'black',
    height: 278,
  },
  heading: {
    padding: '2.5%',
    paddingBottom: '1%'
  },
  title: {
    fontFamily: 'Courier',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    marginTop: 4,
    fontFamily: 'Courier',
    color: 'grey',
    fontSize: 18,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'black' 
  },
  image: {
    width: "100%",
    // height: "100%",
    flex: 6,
    resizeMode: 'cover'
  },
  caption: {
    paddingHorizontal: '2.5%',
    paddingTop: '2.5%',
    flex: 1,
    overflow: 'hidden'
    // flexWrap: 'nowrap'
  },
  description: {
    fontFamily: 'Courier',
    color: 'black',
    fontSize: 16,
  }
});