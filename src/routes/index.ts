export type RoutesConfig = {
    gameMenus?:Route[],
    Menus?:Route[]
}

export type RouteMeta = {
  title:string,
  url?:string,
  img?:any,
  description?:string
}
export type Route = {
    path?:string,
    name?:string,
    component?:string,
    childern?:Route[],
    meta?: RouteMeta
}

const routesConfig:RoutesConfig = {
  gameMenus: [{
    path: '/spaceHuggers',
    name: 'spaceHuggers',
    component: 'iframeContainer',
    meta: {
      title: '太空保护者',
      img: require('../img/spaceHuggers.gif'),
      description: `射击类游戏，消灭所有敌人。通过外接手柄可进行多人游戏，最多支持 4 个人。不仅如此还有敌人和道具系统以及雨、雪、血、爆炸、武器、水等粒子系统。手机端操作需要外接手柄;WASD 或方向键：移动、跳跃和攀爬
      Z 或左键单击：射击，大多数东西会破裂，有些会燃烧
      X 或中键：滚动，短暂的无敌状态，还可灭火
      C 或右键单击：手榴弹，每条命有 3 个`,
      url: 'https://js13kgames.com/games/space-huggers/index.html',
    },
  },
  {
    path: '/blackHoleSquare',
    name: 'blackHoleSquare',
    component: 'iframeContainer',
    meta: {
      title: '黑洞广场（支持移动端）',
      img: require('../img/blackHoleSquare.gif'),
      description: '益智类游戏，把所有块清除则过关。向左划开始游戏，点击块会向箭头方向移动，块进入“黑洞”则被清除',
      url: 'https://js13kgames.com/games/black-hole-square/index.html',
    },
  },
  {
    path: '/PACKABUNCHAS',
    name: 'PACKABUNCHAS',
    component: 'iframeContainer',
    meta: {
      title: 'PACKABUNCHAS（支持移动端）',
      img: require('../img/PACKABUNCHAS.gif'),
      description: '益智类游戏，用提供的形状拼出指定的形状。点击旋转，拖动图形',
      url: 'https://js13kgames.com/games/packabunchas/index.html',
    },
  }],
  Menus: [{
    path: '/home',
    name: 'home',
    component: 'Home',
  }],
};

export default routesConfig;
