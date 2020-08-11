import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const MainFooter = (props) => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Guillaume SAGOT &copy; {new Date().getFullYear()}
    </Footer>
  );
};

export default MainFooter;
