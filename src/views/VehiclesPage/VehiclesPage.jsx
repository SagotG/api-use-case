import { Typography } from 'antd';
import React from 'react';
import { VehiclesList } from '../../components';

const VehiclesPage = () => {
  return (
    <>
      <Typography.Title>Vehicles</Typography.Title>
      <VehiclesList />
    </>
  );
};

export default VehiclesPage;
