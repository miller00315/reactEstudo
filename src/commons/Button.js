import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default props => (
  <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
    <Text style={styles.textButon}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0000ff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  textButon: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
