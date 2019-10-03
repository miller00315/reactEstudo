import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default props => (
  <View style={styles.conatiner}>
    <Image style={styles.image} source={props.image} />
  </View>
);

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: null,
    height: null,
  },
  image: {
    flex: 1,
    alignSelf: 'center',
  },
});
