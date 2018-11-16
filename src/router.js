/* global System */

import React from 'react';
import {
  Router,
  hashHistory,
} from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

// breaks up react routes into separate js files for quicker load
const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: 'artists/new',
      getComponent(location, cb) {
        // automatically split up this code into a sub bundle
        System.import('./components/artists/ArtistCreate')
          .then(module => cb(null, module.default));
      },
    },

    {
      path: 'artists/:id',
      getComponent(location, cb) {
        // automatically split up this code into a sub bundle
        System.import('./components/artists/ArtistDetail')
          .then(module => cb(null, module.default));
      },
    },

    {
      path: 'artists/:id/edit',
      getComponent(location, cb) {
        // automatically split up this code into a sub bundle
        System.import('./components/artists/ArtistEdit')
          .then(module => cb(null, module.default));
      },
    },
  ],
};

const Routes = () => <Router history={hashHistory} routes={componentRoutes} />;

export default Routes;
