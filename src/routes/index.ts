import { FC } from 'react';

// components
import Home from '@/pages/Home';

export type RoutesConfig = {
    gameMenus?:Route[],
    Menus?:Route[]
}

export type Route = {
    path?:string,
    name?:string,
    component?:string|FC,
    childern?:Route[],
    meta?:unknown
}

const routesConfig:RoutesConfig = {
  gameMenus: [{
    path: '/spaceHuggers',
    name: 'spaceHuggers',
    meta: {
      title: '太空保护者',
      img: 'spaceHuggers.gif',
    },
  }],
  Menus: [{
    path: '/home',
    name: 'home',
    component: Home,
  }],
};

export default routesConfig;
