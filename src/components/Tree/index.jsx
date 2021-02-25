import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import styles from './Tree.module.scss';
import { ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';

const { THEMES } = CONSTANTS;

const Tree = props => {
  return (
    <ThemeContext.Consumer>
      {([theme]) => {
        const classNames = cx(styles.container, {
          [styles.lightTheme]: theme === THEMES.LIGHT,
          [styles.darkTheme]: theme === THEMES.DARK,
        });
        return (
          <div className={classNames}>
            <div>TREE</div>
            <Parent />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Tree;
