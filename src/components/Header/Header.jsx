import React, { Component } from 'react';
import { PageHeader, Descriptions } from 'antd';
import { Link } from 'react-router-dom';

const INIT = {};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INIT };
  }

  render() {
    return (
      <div className='site-page-header-ghost-wrapper shadow'>
        <PageHeader ghost={true}>
          <Descriptions size='small' column={4}>
            <Descriptions.Item>
              <Link to='/home'>
                <img src={'/img/sm-logo.png'} width={'45px'} alt='OceanShare' />
              </Link>
            </Descriptions.Item>
            <Descriptions.Item label='Lat'>-34.39754254</Descriptions.Item>

            <Descriptions.Item label='lng'>lng: 150.644</Descriptions.Item>
            <Descriptions.Item />
          </Descriptions>
        </PageHeader>
      </div>
    );
  }
}

export default Header;
