import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <S.H2>{ headline }</S.H2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
