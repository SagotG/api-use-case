import { Col, Layout, Typography } from 'antd';
import React from 'react';
import { StarshipsList } from '../../components';

const StarshipsPage = () => {
  return (
    <>
      <Typography.Title>StarshipsPage</Typography.Title>
      <StarshipsList />
    </>
  );
};

export default StarshipsPage;
