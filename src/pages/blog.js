import React from "react";
import Layout from './layout';
import { Link } from "gatsby";

export default () => (
  <Layout>
    <ul>
      <li>
        <Link to="/blog/hello-gatsby" activeClassName=''>
          Hello Gatsby
        </Link>
        <p>Dec 8, 2018</p>
        <p>Description</p>
      </li>
    </ul>
  </Layout>
);
