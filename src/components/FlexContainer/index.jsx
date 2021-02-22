import React from 'react';
import PropTypes from 'prop-types';

const FlexContainer = props => {
  const { children, jc, ai, fd, wrap, column, reverse } = props;

  const inlineStyles = {
    display: 'flex',
    justifyContent: jc,
    alignItems: ai,
    flexDirection: '',
    flexWrap: wrap,
  };

  return <div style={inlineStyles}>{children}</div>;
};

FlexContainer.defaultProps = {
  jc: 'flex-start',
  ai: 'stretch',
  fd: 'row',
  wrap: 'no-wrap',
};

FlexContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  jc: PropTypes.string,
  ai: PropTypes.string,
  fd: PropTypes.string,
  wrap: PropTypes.string,
};

export default FlexContainer;
