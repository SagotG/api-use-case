import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { MainContainer, NavBar, MainFooter } from './components';
function App() {
  return (
    <Layout className='layout'>
      <NavBar />
      <MainContainer /> <MainFooter />
    </Layout>
  );
}

export default App;
