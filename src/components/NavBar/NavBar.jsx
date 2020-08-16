import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu, Typography } from 'antd';

const { Header } = Layout;

const NavBar = (props) => {
  const itemMenu = () => {
    const routes = props.routes;
    return (
      <Menu>
        {routes.map((prop, key) => {
          if (!prop.name) {
            return null;
          }
          if (prop.path === '/home') {
            return (
              <Menu.Item key={key}>
                <Typography.Text strong>
                  <Link to={prop.path}>{prop.name}</Link>
                </Typography.Text>
              </Menu.Item>
            );
          }
          return (
            <Menu.Item key={key}>
              <Link to={prop.path}>{prop.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };

  return (
    <>
      <Header theme='light'>
        <Menu theme='light' mode='horizontal'>
          {itemMenu()}
        </Menu>
      </Header>
    </>
  );
};

NavBar.propTypes = {
  name: PropTypes.string,
};

export default NavBar;
