import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default props => (
  <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
    <Text style={styles.textButton}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00000000',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textButton: {
    color: '#ffffff',
    fontSize: 16,
    backgroundColor: 'transparent',
  },
});
