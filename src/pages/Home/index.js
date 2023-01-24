import React from 'react';
import Header from '../../components/Header';
import Missions from '../../components/Missions';
import SolarSystem from '../../components/SolarSystem';

import * as S from './styles';

class Home extends React.Component {
  render() {
    return (
      <S.Container>
        <Header />
        <SolarSystem />
        <Missions />
      </S.Container>
    );
  }
}

export default Home;
