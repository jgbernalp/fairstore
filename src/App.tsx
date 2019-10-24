import { h } from "preact";
import { Router, Link } from "preact-router";
import { Home } from "./views/Home";
import { Products } from "./views/Products";
import { Farmers } from "./views/Farmers";
import styles from "./App.styl";

export const App = () => {
  return (
    <div className={styles.app}>
      <nav>
        <ul>
          <li>
            <Link activeClassName="active" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="active" href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link activeClassName="active" href="/farmers">
              Farmers
            </Link>
          </li>
        </ul>
      </nav>
      <section>
        <Router>
          <Home path="/" />
          <Products path="/products" />
          <Farmers path="/farmers" />
        </Router>
      </section>
    </div>
  );
};
