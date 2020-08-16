import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'antd';
import { Link } from 'react-router-dom';

const HomeCards = (props) => {
  if (props.path === '/home') {
    return null;
  }
  return (
    <Col xs={24} md={12} lg={8} xl={8}>
      <Link to={props.path}>
        <Card
          hoverable
          cover={
            <img style={{ width: '100%' }} alt={props.alt} src={props.url} />
          }>
          <Card.Meta title={props.name} description={props.description} />
        </Card>
      </Link>
    </Col>
  );
};

HomeCards.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  path: PropTypes.string,
};

export default HomeCards;
