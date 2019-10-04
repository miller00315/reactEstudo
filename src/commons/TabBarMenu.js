import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TabBar} from 'react-native-tab-view';

import {setAddContactScreen} from '../actions/AppActions';

const TabBarMenu = props => {
  return (
    <View style={{backgroundColor: props.color, elevation: 4}}>
      <StatusBar backgroundColor={props.color} />
      <View style={styles.body}>
        <Text style={styles.text}>{props.title}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => props.setAddContactScreen(true)}>
            <Image source={require('../assets/imgs/adicionar-contato.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TabBar {...props} style={{backgroundColor: props.color, elevation: 0}} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginStart: 20,
  },
  buttons: {
    marginEnd: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default connect(
  null,
  {setAddContactScreen},
)(TabBarMenu);
