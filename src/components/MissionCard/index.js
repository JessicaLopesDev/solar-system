import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import * as S from './styles';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <S.Container data-testid="mission-card">
        <S.Name data-testid="mission-name">{ name }</S.Name>
        <S.Year data-testid="mission-year">{ year }</S.Year>
        <S.Country data-testid="mission-country">{ country }</S.Country>
        <S.Destination data-testid="mission-destination">{ destination }</S.Destination>
      </S.Container>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
