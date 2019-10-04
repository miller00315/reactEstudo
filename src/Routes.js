import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import FormRegister from './components/FormRegister';
import FormLogin from './components/FormLogin';
import Welcomes from './components/Welcomes';
import MainScreen from './components/MainScreen';
import AddContact from './components/AddContact';

export default props => (
  <Router navigationBarStyle={styles.navibar} titleStyle={styles.titleNavibar}>
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
      <Scene
        key="addContact"
        component={AddContact}
        title="Adicionar Contato"
      />
    </Scene>
  </Router>
);

const styles = {
  navibar: {
    backgroundColor: '#115e54',
  },
  titleNavibar: {
    color: '#ffffff',
  },
};
