import React, {Component} from 'react';
import {connect} from 'react-redux';

import {View, StyleSheet, ActivityIndicator} from 'react-native';
import TextInput from '../commons/TextInput';
import Button from '../commons/Button';
import Background from '../commons/Background';
import ErroText from '../commons/ErrorText';
import {
  changeEmail,
  changePassword,
  changeName,
  registerUser,
} from '../actions/AutheticationActions';

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this._registerUser = this._registerUser.bind(this);
  }

  _registerUser() {
    const {name, password, email} = this.props;
    this.props.registerUser({name, password, email});
  }

  renderButtons() {
    if (this.props.loading) {
      return <ActivityIndicator />;
    } else {
      return <Button title="Cadastrar" onPress={this._registerUser} />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Background image={require('../assets/imgs/bg.png')} />
        <View style={styles.header}>
          <TextInput
            placeholder="Nome"
            value={this.props.name}
            onChange={this.props.changeName}
          />
          <TextInput
            placeholder="Email"
            value={this.props.email}
            onChange={this.props.changeEmail}
          />
          <TextInput
            placeholder="Senha"
            value={this.props.password}
            onChange={this.props.changePassword}
            isSecure
          />
          <ErroText error={this.props.error} />
        </View>
        <View style={styles.footer}>{this.renderButtons()}</View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AuthenticationReducer.email,
  password: state.AuthenticationReducer.password,
  name: state.AuthenticationReducer.name,
  error: state.AuthenticationReducer.errorRegister,
  loading: state.AuthenticationReducer.loadingRegister,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flex: 4,
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
  },
});

export default connect(
  mapStateToProps,
  {
    changeEmail,
    changePassword,
    changeName,
    registerUser,
  },
)(FormRegister);
