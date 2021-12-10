import React, { Component } from 'react';
import { Layout } from 'antd';

const {
  Content,
} = Layout;
class Home extends Component {
  render() {
    console.log(this, 'Home');
    return (
        <Layout>
         <Content>Content</Content>
      </Layout>
    );
  }
}
export default Home;
