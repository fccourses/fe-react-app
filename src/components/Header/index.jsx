import React, { Component } from 'react';
import cx from 'classnames';
import { Brightness3, WbSunny } from '@material-ui/icons';
import { withTheme, withUser } from '../HOCs';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';

const { THEMES } = CONSTANTS;

class Header extends Component {
  render () {
    const { theme, setTheme, user } = this.props;
    const isDarkTheme = theme === THEMES.DARK;
    const classNames = cx(styles.container, {
      [styles.lightTheme]: theme === THEMES.LIGHT,
      [styles.darkTheme]: isDarkTheme,
    });

    return (
      <div className={classNames}>
        <span>
          {user.firstName} {user.lastName}
        </span>
        <img src={user.imageSrc} alt='doe' />

        <div
          onClick={() => {
            const nextTheme = isDarkTheme ? THEMES.LIGHT : THEMES.DARK;
            setTheme(nextTheme);
          }}
        >
          {isDarkTheme ? <Brightness3 /> : <WbSunny />}
        </div>
      </div>
    );
  }
}

const HeaderWithTheme = withTheme(Header);

export default withUser(HeaderWithTheme);
