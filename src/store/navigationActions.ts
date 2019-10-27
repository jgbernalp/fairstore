import { State } from './State';

export const navigationActions = {
  setMenuOpen: (_: State, value: boolean) => ({ isMenuOpen: value }),
};
