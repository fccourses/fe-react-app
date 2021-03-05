import React, { useContext, useEffect, useRef } from 'react';
import { MenuOpen, Close } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import styles from './NavMenu.module.scss';
import { AppContext } from 'contexts';

const NavMenu = props => {
  const {
    state: { isMenuOpen },
    openMenu,
    closeMenu,
  } = useContext(AppContext);

  const navRef = useRef(null);

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (isMenuOpen && !navRef.current.contains(target)) {
        closeMenu();
      }
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isMenuOpen]);

  const classNames = cx(styles.container, {
    [styles.open]: isMenuOpen,
  });

  return (
    <nav ref={navRef} className={classNames}>
      <Close
        tabIndex='0'
        fontSize='large'
        onClick={closeMenu}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            closeMenu();
          }
        }}
        classes={{ root: styles.closeIcon }}
      />
      <ul className={styles.list}>
        <li>
          <NavLink to='/'> Home</NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'>Sign-in</NavLink>
        </li>
        <li>
          <NavLink to='/sign-up'>Sign-up</NavLink>
        </li>
        <li>
          <NavLink to='/chat'>Chat</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
