import { h } from 'preact';
import { Router } from 'preact-router';
import { Home } from './views/Home';
import { Products } from './views/Products';
import { Farmers } from './views/Farmers';
import styles from './App.styl';
import { NavigationConnected } from './components/Navigation';
import { ProductDetail } from './views/ProductDetail';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className={styles.app}>
      <NavigationConnected />
      <section className={styles.section}>
        <Router>
          <Home path="/" />
          <Products path="/products" />
          <ProductDetail path="/products/:productId" />
          <Farmers path="/farmers" />
        </Router>
        <Footer />
      </section>
    </div>
  );
};
