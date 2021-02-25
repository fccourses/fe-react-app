import { Component } from 'react';
import { ThemeContext, UserContext } from '../../contexts';

export const withTheme = WrappedComponent => {
  function WrappedComponentWithTheme (props) {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          return (
            <WrappedComponent theme={theme} setTheme={setTheme} {...props} />
          );
        }}
      </ThemeContext.Consumer>
    );
  }

  return WrappedComponentWithTheme;
};

export const withUser = WrappedComponent => {
  class WrappedComponentWithUser extends Component {
    /*     
    constructor (props) {
      super(props);
      this.state = {};
    }

    componentDidMount () {}
    componentDidUpdate (prevProps, prevState) {} */
    render () {
      return (
        <UserContext.Consumer>
          {user => <WrappedComponent user={user} {...this.props} />}
        </UserContext.Consumer>
      );
    }
  }

  return WrappedComponentWithUser;
};
