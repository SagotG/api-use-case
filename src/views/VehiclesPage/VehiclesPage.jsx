import { Typography } from 'antd';
import React from 'react';
import { VehiclesList } from '../../components';

const VehiclesPage = (props) => {
  return (
    <>
      <Typography.Title>VehiclesPage</Typography.Title>
      <VehiclesList />
    </>
  );
};

export default VehiclesPage;
