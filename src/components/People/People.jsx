import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const People = (props) => {
  return (
    <div className='site-card-border-less-wrapper'>
      <Card>
        <Title>{props.name || 'Unknow'}</Title>
        <Text type='secondary'>{props.planets || 'Unknow'}</Text>
      </Card>
    </div>
  );
};

People.propTypes = {
  name: PropTypes.string,
  planets: PropTypes.string,
};

export default People;
