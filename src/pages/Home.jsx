import React, { Component } from 'react';
import { Card } from 'antd';
import routesConfig from '@/routes';
import {
  withRouter,
} from 'react-router-dom';

const { Meta } = Card;
class Home extends Component {
  goPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="cardBox">
         {
           routesConfig.gameMenus.map((menu) => (
           <Card
           onClick={this.goPath.bind(this, menu.path)}
           key={menu.name}
          hoverable
          style={{ width: '50vw' }}
          cover={<img alt="example" src={menu.meta.img.default} />}
           >
          <Meta title={menu.meta.title} description={menu.meta.description} />
        </Card>))
         }
         </div>
    );
  }
}
export default withRouter(Home);
