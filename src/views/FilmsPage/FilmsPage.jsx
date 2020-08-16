import { Typography } from 'antd';
import React from 'react';
import { FilmsList } from '../../components';

const FilmPage = (props) => {
  return (
    <>
      <Typography.Title>FilmPage</Typography.Title>
      <FilmsList />
    </>
  );
};

export default FilmPage;
