/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import * as React from "react";
import Hello from './Hello';

const title: string = 'Hello Page';

export default {

  path: '/hello',

  action() {

    var e = new Error('dummy');
    var stack = e.stack.replace(/^[^\(]+?[\n$]/gm, '')
        .replace(/^\s+at\s+/gm, '')
        .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
        .split('\n');
    
    var localTitle: string = title + " - " + new Date()
    return {
      title,
      component: <Hello title={localTitle} />,
    };
  },

};
