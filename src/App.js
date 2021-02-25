import React, { Component } from 'react';
import Header from './components/Header';
import Tree from './components/Tree';
import { UserContext, ThemeContext } from './contexts';
import CONSTANTS from './constants';
const { THEMES } = CONSTANTS;
/* 
  1. Создание контекста - createContext
  2. Предоставление данных контекста - Provider
  3. Чтение данных из контекста - Consumer
*/

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      theme: THEMES.DARK,
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        imageSrc:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      },
    };
  }

  setTheme = theme => this.setState({ theme });

  render () {
    const { user, theme } = this.state;
    return (
      <ThemeContext.Provider value={[theme, this.setTheme]}>
        <UserContext.Provider value={user}>
          <Header />
          <Tree />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
