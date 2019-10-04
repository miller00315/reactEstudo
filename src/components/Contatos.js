import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Background from '../commons/Background';

export default props => {
  return (
    <View style={styles.container}>
      <Background image={require('../assets/imgs/bg.png')} />
      <Text>Contatos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
