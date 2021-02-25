import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import styles from './Tree.module.scss';
import { ThemeContext } from '../../contexts';
import { withTheme } from '../HOCs';
import CONSTANTS from '../../constants';

const { THEMES } = CONSTANTS;

const Tree = props => {
  const { theme } = props;

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
};

const TreeWithTheme = withTheme(Tree);

export default TreeWithTheme;
