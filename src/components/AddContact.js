import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import {connect} from 'react-redux';

import Button from '../commons/Button';
import InputText from '../commons/TextInput';
import Background from '../commons/Background';
import Header from '../commons/Header';
import {
  changeEmail,
  addContact,
  setAddContactScreen,
} from '../actions/AppActions';
import ErrorText from '../commons/ErrorText';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this._addContact = this._addContact.bind(this);
    this._setAddContactScreen = this._setAddContactScreen.bind(this);
  }

  _addContact() {
    this.props.addContact(this.props.email);
  }

  _setAddContactScreen() {
    this.props.setAddContactScreen();
  }

  renderButton() {
    if (this.props.loading) {
      return <ActivityIndicator size="large" />;
    } else {
      return <Button title={'Adicionar'} onPress={this._addContact} />;
    }
  }

  renderAddContact() {
    if (this.props.showAddContactScreen) {
      return (
        <View style={styles.container}>
          <Background image={require('../assets/imgs/bg.png')} />
          <View style={styles.body}>
            <InputText
              onChange={this.props.changeEmail}
              placeholder={'Contato'}
              value={this.props.email}
            />
            <ErrorText error={this.props.error} />
          </View>
          <View style={styles.body}>{this.renderButton()}</View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Background image={require('../assets/imgs/bg.png')} />
          <Header title="Contato adicionado!" />
          <View style={styles.body}>
            <Button
              title={'Adicionar mais'}
              onPress={this._setAddContactScreen}
            />
          </View>
        </View>
      );
    }
  }

  render() {
    return this.renderAddContact();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  email: state.AppReducer.email,
  loading: state.AppReducer.loadingAddContact,
  error: state.AppReducer.error,
  showAddContactScreen: state.AppReducer.showAddContactScreen,
});

export default connect(
  mapStateToProps,
  {changeEmail, addContact, setAddContactScreen},
)(AddContact);
