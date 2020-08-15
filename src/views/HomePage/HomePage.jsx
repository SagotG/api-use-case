import { Row, Typography } from 'antd';
import React from 'react';
import HomeCards from '../../components/HomeCards/HomeCards';
import dashRoutes from '../../routes/routes';

const HomePage = () => {
  return (
    <>
      <Typography.Title>Selet your category</Typography.Title>
      <br />
      <Row gutter={[24, 16]}>
        {dashRoutes.map((item, key) => {
          if (item.hidden) {
            return null;
          } else {
            return (
              <HomeCards
                key={key}
                name={item.name}
                alt={item.alt}
                description={item.description}
                url={item.url}
                path={item.path}
              />
            );
          }
        })}
      </Row>
    </>
  );
};

export default HomePage;
