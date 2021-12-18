import React, { useState, useEffect, useRef } from 'react';
import routesConfig from '@/routes';
import {
  withRouter,
} from 'react-router-dom';
import { Spin } from 'antd';

type Props = {
  location:{pathname:string}
}

const iframeContainer :React.FC<Props> = (props:Props) => {
  let menu = null;
  Object.keys(routesConfig)?.forEach((key) => {
    Array.isArray(routesConfig[key]) && routesConfig[key]?.forEach((r) => {
      if (r.path === props.location.pathname) {
        menu = r;
      }
    });
  });
  const nameRef = useRef(null);
  useEffect(() => {
    console.log(nameRef, 'nameRef');
    const ifra = nameRef.current;
    ifra.onload = function () { // 非IE
      setLoad(false);
    };
    ifra.onreadystatechange = function () { // IE下的节点都有onreadystatechange这个事件
      if (ifra.readyState === 'complete') {
        setLoad(false);
      }
    };
  });
  const [loading, setLoad] = useState(true);
  return <><Spin tip="游戏加载中..." size="large" spinning={loading} style={{
    width: '100%', height: '100%', paddingTop: '25%', color: 'red', fontSize: '5em',
  }}
           />
    <iframe ref={nameRef} src={menu.meta.url} style={{ width: '100%', height: '100%' }} frameBorder="0" /></>;
};
export default withRouter(iframeContainer);
