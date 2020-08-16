import { Typography } from 'antd';
import React from 'react';
import { FilmsList } from '../../components';

const FilmPage = () => {
  return (
    <>
      <Typography.Title>Films</Typography.Title>
      <FilmsList />
    </>
  );
};

export default FilmPage;
