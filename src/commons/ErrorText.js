import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default props => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{props.error}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  errorText: {
    backgroundColor: 'transparent',
    color: '#ff0000',
    fontSize: 16,
  },
});
