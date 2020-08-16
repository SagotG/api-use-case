import { Typography } from 'antd';
import React from 'react';
import { PeopleList } from '../../components';

const PeoplePage = (props) => {
  return (
    <>
      <Typography.Title>Characters</Typography.Title>
      <PeopleList />
    </>
  );
};

export default PeoplePage;
