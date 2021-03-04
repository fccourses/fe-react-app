import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from 'react';
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

function computeResult (num) {
  let i = 0;
  for (let j = 0; j < 400000000; j++) {
    i += j;
  }
  return num ** 3;
}

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

  const onChangeInput = useCallback(({ target: { value } }) => {
    setValue(Number(value));
  }, []);

  const layoutString = useMemo(() => computeResult(value), [value]);

  return (
    <div style={stylesMap[theme]}>
      <h1>{layoutString}</h1>
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

export default Home;
