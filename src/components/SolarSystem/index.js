import React, { Component } from 'react';
import planets from '../../data/planets';
import PlanetCard from '../PlanetCard';
import Title from '../Title';

import * as S from './styles';

class SolarSystem extends Component {
  render() {
    return (
      <S.Container data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets
            .map((planet) => (<PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
              id={ planet.name }
            />))
        }
      </S.Container>
    );
  }
}

export default SolarSystem;
