import type { RegisterApplicationConfig } from 'single-spa';
// export type MicroApp = {
//     name:string,
//     entry:string,
//     activeRule:string|boolean,
//     container:string|HTMLElement,
//     props?:unknown
// }
import { registerMicroApps, start } from 'qiankun';

export type ActiveRule = (str:string) => RegisterApplicationConfig['activeWhen']
const getActiveRule:ActiveRule = (path) => (location) => location.hash.startsWith(path);
registerMicroApps([
  {
    name: 'spaceHuggers',
    entry: 'http://localhost:9000',
    activeRule: getActiveRule('#/spaceHuggers'),
    container: '#microApp',
  },
]);

start();
