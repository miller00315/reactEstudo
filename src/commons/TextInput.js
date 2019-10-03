import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default props => (
  <TextInput
    value={props.value}
    onChangeText={text => props.onChange(text)}
    style={styles.inputText}
    placeholder={props.placeholder}
    secureTextEntry={props.isSecure}
  />
);

const styles = StyleSheet.create({
  inputText: {
    fontSize: 16,
    height: 45,
    margin: 10,
    borderColor: '#acacac',
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
});
