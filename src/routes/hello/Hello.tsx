/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import * as React from "react";
import { PropTypes } from "react";
import { withStyles } from 'isomorphic-style-loader/lib/withStyles';
import * as Layout from '../../components/Layout';
import * as s from './Hello.css';


interface IHello {
  title:string;
}

function Hello({ title } : IHello) {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    </Layout>
  );
}

export default withStyles(s)(Hello);
