import { createContext } from 'react';

export const UserContext = createContext(null);
export const ThemeContext = createContext();
export const AppContext = createContext({ isMenuOpen: false });
