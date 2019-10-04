import React, {useState} from 'react';

import {Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import TabBarMenu from '../commons/TabBarMenu';

import Conversas from './Conversas';
import Contatos from './Contatos';

const MainScreen = props => {
  const [rar, setRar] = useState({
    index: 0,
    routes: [{key: '1', title: 'Conversas'}, {key: '2', title: 'Contatos'}],
  });

  return (
    <TabView
      navigationState={rar}
      renderScene={renderScene}
      onIndexChange={index => setRar({...rar, index})}
      initialLayout={initialLayout}
      renderTabBar={parameters => renderHeader(parameters)}
    />
  );
};

const renderHeader = props => (
  <TabBarMenu {...props} title={'Catarse'} color={'#114d44'} />
);

const renderScene = SceneMap({
  '1': Conversas,
  '2': Contatos,
});

const initialLayout = {width: Dimensions.get('window').width};

export default MainScreen;
