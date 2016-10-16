* install typescript from npm    `npm install typescript -g && npm link typescript`

* Create tsconfig.json to indicate root of the project. The presence of a tsconfig.json indicates that the directory is the root of a TypeScript project.
* install typings from npm `npm install typings -g`
* typings install --global --save dt~react  dt~express  dt~body-parser dt~cookie-parser dt~graphql dt~passport dt~react-dom dt~sequelize dt~universal-router
* typings install --global --save dt~require dt~node dt~lodash  dt~serve-static dt~express-serve-static-core dt~es6-promise 
* typings install --global --save dt~mime dt~validator dt~isomorphic-style-loader
* Modify  .d.ts files for Node and RequireJS. Include declare var require: NodeRequire|Require. (Replace existing require declaration)

* DTS Gen
* npm install -g dts-gen && npm link dts-gen
* npm install -g isomorphic-style-loader && dts-gen -m isomorphic-style-loader


Webpack Configuration

*  npm install ts-loader --save-dev
*  Configure tsloader as the first loader in the common config section under "const config",
*  Configure tsloader as the first loader in the common config section under "const config",       
        {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015!ts-loader'
        },

* Register typescript files in resolve section, typescript should be prior to js files
        resolve: {
            root: path.resolve(__dirname, '../src'),
            modulesDirectories: ['node_modules'],
            extensions: ['', '.webpack.js', '.web.js','.ts','.tsx', '.js', '.jsx', '.json'],
        }
 
 * If you created new route using typescript, ensure it is registered in index.js 

 * React import gotcha - https://github.com/DefinitelyTyped/DefinitelyTyped/issues/5128 

import * as React from "react";
import { PropTypes } from "react";