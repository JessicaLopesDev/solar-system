import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage, id } = this.props;

    return (
      <S.Container data-testid="planet-card" id={ id }>
        <S.Planet data-testid="planet-name">{ planetName }</S.Planet>
        <S.Image
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </S.Container>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PlanetCard;
