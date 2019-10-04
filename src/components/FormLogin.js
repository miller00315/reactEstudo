import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {View, StyleSheet, ActivityIndicator} from 'react-native';
import TextInput from '../commons/TextInput';
import Button from '../commons/Button';
import TouchableText from '../commons/TouchableText';
import Header from '../commons/Header';
import Background from '../commons/Background';
import ErroText from '../commons/ErrorText';
import I18n from '../utils/I18n';

import {
  changeEmail,
  changePassword,
  loginUser,
} from '../actions/AutheticationActions';

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.goToRegister = this.goToRegister.bind(this);
    this._loginUser = this._loginUser.bind(this);
  }

  goToRegister() {
    Actions.formRegister();
  }

  _loginUser() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderButtons() {
    if (this.props.loading) {
      return <ActivityIndicator size="large" />;
    } else {
      return (
        <View>
          <TouchableText
            title="Ainda não tem cadastro? Cadastre-se."
            onPress={this.goToRegister}
          />
          <Button title={I18n.t('login')} onPress={this._loginUser} />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Background image={require('../assets/imgs/bg.png')} />
        <Header title="Catarse" />
        <View style={styles.body}>
          <TextInput
            placeholder={I18n.t('user')}
            value={this.props.email}
            onChange={this.props.changeEmail}
          />
          <TextInput
            placeholder={I18n.t('password')}
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
  error: state.AuthenticationReducer.errorLogin,
  loading: state.AuthenticationReducer.loadingLogin,
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  body: {
    flex: 2,
    justifyContent: 'center',
  },
  footer: {
    flex: 2,
  },
});

export default connect(
  mapStateToProps,
  {changeEmail, changePassword, loginUser},
)(FormLogin);
