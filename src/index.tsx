import { h, render } from 'preact';
import { App } from './App';
import createStore from 'unistore';
import { Provider } from 'unistore/preact';
import { State } from './store/State';

const mainNode = document.getElementById('app') as HTMLElement;

const defaultState: State = {
  isMenuOpen: false,
};

const store = createStore(defaultState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  mainNode,
  mainNode,
);
