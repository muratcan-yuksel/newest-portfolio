import React from "react";
import { Fragment } from "react";

const Layout = ({ children }) => (
  <Fragment>
    {/* The header and navigation remain constant */}
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>

    {/* The page content changes based on the route */}
    <main>{children}</main>

    {/* The footer remains constant */}
    <footer>Copyright {new Date().getFullYear()}</footer>
  </Fragment>
);

export default Layout;
