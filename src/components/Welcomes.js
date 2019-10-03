import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import AppIntroSlider from 'react-native-app-intro-slider';
import Button from '../commons/Button';
import Header from '../commons/Header';
import Background from '../commons/Background';
import {onDoneAllSlides, onSkipSlides} from '../actions/AutheticationActions';

class Welcomes extends Component {
  constructor(props) {
    super(props);
    this._goToLogin = this._goToLogin.bind(this);
  }

  _goToLogin() {
    Actions.formLogin();
  }

  render() {
    if (this.props.showSlider) {
      return (
        <AppIntroSlider
          onDone={this.props.onDoneAllSlides}
          onSkip={this.props.onSkipSlides}
          slides={slides}
          showSkipButton={true}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <Background image={require('../assets/imgs/bg.png')} />
          <Header title="Bem-vindo ao Catarse" />
          <View styles={styles.footer}>
            <Button title="Realizar Login" onPress={this._goToLogin} />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  footer: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

const slides = [
  {
    key: 'k1',
    title: 'Event Organizer',
    text: 'Best Event Organizers',
    image: {
      uri:
        'https://reactnativecode.com/wp-content/uploads/2019/04/calendar.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#FF1744',
  },
  {
    key: 'k2',
    title: 'Weather Reports',
    text: 'Latest Weather Reports',
    image: {
      uri: 'https://reactnativecode.com/wp-content/uploads/2019/04/cloud.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#D500F9',
  },
]; 

const mapStateToProps = state => ({
  showSlider: state.AuthenticationReducer.showSlider,
});

export default connect(
  mapStateToProps,
  {onDoneAllSlides, onSkipSlides},
)(Welcomes);
