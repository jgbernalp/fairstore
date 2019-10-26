import { h } from 'preact';
import { Router } from 'preact-router';
import { Home } from './views/Home';
import { Products } from './views/Products';
import { Farmers } from './views/Farmers';
import styles from './App.styl';
import { Navigation } from './components/Navigation';

export const App = () => {
  return (
    <div className={styles.app}>
      <Navigation />
      <section className={styles.section}>
        <Router>
          <Home path="/" />
          <Products path="/products" />
          <Farmers path="/farmers" />
        </Router>
      </section>
    </div>
  );
};
