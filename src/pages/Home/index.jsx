import React, { useState, useEffect, useContext, useCallback } from 'react';
import { ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';

const { THEMES } = CONSTANTS;

const stylesMap = {
  [THEMES.LIGHT]: {
    backgroundColor: 'white',
    color: 'black',
    height: '100vh',
  },
  [THEMES.DARK]: {
    backgroundColor: 'black',
    color: 'white',
    height: '100vh',
  },
};

const Home = props => {
  const [value, setValue] = useState(1);
  const [theme, setTheme] = useContext(ThemeContext);

  /*   const switchTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };
 */

  const switchOnce = useCallback(() => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  }, [theme]);

  const logResult = useCallback(() => {
    console.log(value);
  }, [value]);

  useEffect(() => {
    console.log('функция создалась');
  }, [logResult]);

  const onChangeInput = useCallback(({ target: { value } }) => {
    setValue(Number(value));
  }, []);

  return (
    <div style={stylesMap[theme]}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat
        dolore impedit. Est modi, quia eligendi dolore facilis esse excepturi{' '}
      </p>
      <input type='number' value={value} onChange={onChangeInput} />
      <button onClick={logResult}>Log result</button>
      <br />
      <button onClick={switchOnce}>
        {theme === THEMES.LIGHT ? 'SET DARK THEME' : 'SET LIGHT THEME'}
      </button>
    </div>
  );
};

function computeResult (num) {
  return num ** 3;
}

export default Home;
