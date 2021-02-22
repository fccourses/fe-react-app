import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageWrapper.module.scss';

const ImageWrapper = props => {
  const { height, width, style, ...restProps } = props;

  const inlineStyles = {
    ...style,
    height,
    width,
  };

  return <div style={inlineStyles} {...restProps} />;
};

ImageWrapper.defaultProps = {
  className: styles.wrapper,
};

ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageWrapper;
