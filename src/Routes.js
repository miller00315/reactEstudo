import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import FormRegister from './components/FormRegister';
import FormLogin from './components/FormLogin';
import Welcomes from './components/Welcomes';
import MainScreen from './components/MainScreen';

export default props => (
  <Router>
    <Scene key="root">
      <Scene key="formLogin" component={FormLogin} hideNavBar initial />
      <Scene key="formRegister" component={FormRegister} title="Registrar" />
      <Scene key="welcomes" component={Welcomes} title="Welcomes" hideNavBar />
      <Scene
        key="mainScreen"
        component={MainScreen}
        title="Catarse"
        hideNavBar
      />
    </Scene>
  </Router>
);
