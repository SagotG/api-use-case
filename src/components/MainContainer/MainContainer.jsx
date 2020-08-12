import React from 'react';
import { Layout, Breadcrumb, Button } from 'antd';
import { PeopleList } from '../index';
import httpFactory from '../../services/httpFactory/httpFactory';
const { Content } = Layout;

const MainContainer = (props) => {
  return (
    <Content style={{ padding: '0 50px', margin: '16px 0' }}>
      <div className='site-layout-content'>
        {/* <People name={'toto'} planets={'duranus'} /> */}
        <Button onClick={() => httpFactory.getPeople()}>GET PEOPLE</Button>
        <PeopleList {...props} />
      </div>
    </Content>
  );
};

export default MainContainer;
