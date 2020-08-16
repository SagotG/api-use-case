import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Typography } from 'antd';

const RacesLink = (props) => {
  const [url, setUrl] = useState(props.species);
  const [data, setData] = useState(null);
  useEffect(() => {
    setUrl(props.races);
    let races = [];
    if (url) {
      url.map((item) => {
        if (item) {
          Axios.get(item).then((res) => {
            races.push(res.data.name);
          });
        }
      });
      setTimeout(() => {
        console.log(races);
        setData(races);
      }, 500);
    }
  }, [props, props.species]);

  return (
    <>
      <Typography.Title level={4}>Species</Typography.Title>
      {data && data.map((item, key) => <p key={key}>{item}</p>)}
    </>
  );
};

export default RacesLink;
