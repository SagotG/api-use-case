import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Typography } from 'antd';

const ShipsLink = (props) => {
  const [url, setUrl] = useState(props.starships);
  const [data, setData] = useState(null);
  useEffect(() => {
    setUrl(props.ships);
    let ships = [];
    if (url) {
      url.map((item) => {
        if (item) {
          Axios.get(item).then((res) => {
            ships.push(res.data.name);
          });
        }
        return item;
      });
      setTimeout(() => {
        setData(ships);
      }, 500);
    }
  }, [props, props.starships]);

  return (
    <>
      <Typography.Title level={4}>Starships</Typography.Title>
      {data && data.map((item, key) => <p key={key}>{item}</p>)}
    </>
  );
};

export default ShipsLink;
