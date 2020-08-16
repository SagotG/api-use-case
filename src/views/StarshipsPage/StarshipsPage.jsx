import React from 'react';
import { Typography } from 'antd';
import { StarshipsList } from '../../components';

const StarshipsPage = () => {
  return (
    <>
      <Typography.Title>Starships</Typography.Title>
      <StarshipsList />
    </>
  );
};

export default StarshipsPage;
