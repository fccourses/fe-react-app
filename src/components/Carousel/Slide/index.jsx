import React, { Component } from 'react';
import cx from 'classnames';
import styles from './Slide.module.css';

class Slide extends Component {
  render () {
    const {
      slide: { src, title, descr },
      isCurrent
    } = this.props;

    const classes = cx(styles.slide, {
      [styles.currentSlide]: isCurrent,
    });

    return (
      <div className={classes}>
        <img src={src} alt={descr} />
        <div>{title}</div>
        <div>{descr}</div>
      </div>
    );
  }
}

export default Slide;
