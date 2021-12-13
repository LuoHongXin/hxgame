import React from 'react';
import routesConfig from '@/routes';
import {
  withRouter,
} from 'react-router-dom';

type Props = {
  location:{pathname:string}
}

const iframeContainer :React.FC<Props> = (props:Props) => {
  let menu = null;
  console.log(props, 666);
  Object.keys(routesConfig)?.forEach((key) => {
    Array.isArray(routesConfig[key]) && routesConfig[key]?.forEach((r) => {
      if (r.path === props.location.pathname) {
        menu = r;
      }
    });
  });
  return <iframe src={menu.meta.url} style={{ width: '100%', height: '100%' }} frameBorder="0" />;
};
export default withRouter(iframeContainer);
