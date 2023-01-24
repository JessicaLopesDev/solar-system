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
        <S.ImgContainer>
          {
            planets
              .map((planet) => (<PlanetCard
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
                id={ (planet.name).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') }
              />))
          }
        </S.ImgContainer>
      </S.Container>
    );
  }
}

export default SolarSystem;
