import { ThemeContext } from '../../contexts';

export const withTheme = WrappedComponent => {
  return props => {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          return <WrappedComponent theme={theme} setTheme={setTheme} />;
        }}
      </ThemeContext.Consumer>
    );
  };
};
