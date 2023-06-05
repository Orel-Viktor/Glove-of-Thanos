// Core
import React from 'react';
// Components
import { Main } from '../../ui/pages/Main';

export const routes = {
   home: '/ThanosGlove/',
};

export const pages = [
   {
      path: routes.home,
      element: <Main />,
   },
];
