import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

export default props => (
  <View style={styles.header}>
    <Image style={styles.image} source={require('../assets/imgs/logo.png')} />
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    backgroundColor: 'transparent',
    color: '#ffffff',
  },
  image: {
    height: 50,
    width: 50,
    marginBottom: 10,
  },
});
