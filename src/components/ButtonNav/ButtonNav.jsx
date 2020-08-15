import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import indexRoutes from '../../routes/routes';
import i18next from 'i18next';

class ButtonNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticate: props.isAuthenticate || false,
    };
  }
  menu = () => {
    const routes = indexRoutes;
    return (
      <Menu>
        {routes.map((prop, key) => {
          if (!prop.name) {
            return null;
          }
          if (!prop.isAuthenticate && this.state.isAuthenticate) {
            return null;
          }
          return (
            <Menu.Item key={key}>
              <Link to={prop.path}>{i18next.t(prop.name)}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };

  render() {
    return (
      <>
        <div className='menu-button'>
          <div id='components-dropdown-demo-dropdown-button'>
            <Dropdown overlay={this.menu}>
              <Button size={'large'} type={'primary'}>
                {i18next.t('Menu')} <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </div>
      </>
    );
  }
}

export default ButtonNav;
