import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Drawer } from 'antd';

const { Title, Text } = Typography;

const People = (props) => {
  const [visible, setVisible] = useState(props.visible);
  return (
    <>
      <Drawer
        title='Basic Drawer'
        placement='right'
        closable={false}
        onClose={setVisible(false)}
        visible={visible}>
        <Title>{props.name || 'Unknow'}</Title>
        <Text type='secondary'>{props.planets || 'Unknow'}</Text>
      </Drawer>
    </>
  );
};

People.propTypes = {
  visible: PropTypes.bool,
  name: PropTypes.string,
  planets: PropTypes.string,
};

export default People;
