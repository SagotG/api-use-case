import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Typography } from 'antd';

const HomeworldLink = (props) => {
  const [url, setUrl] = useState(props.homeworld);
  const [data, setData] = useState(null);
  useEffect(() => {
    setUrl(props.homeworld);
    console.log(props.homeworld);

    if (url) {
      Axios.get(url).then((res) => {
        setData(res.data.name);
      });
    }
  }, [props, props.homeworld]);

  return (
    <>
      <Typography.Title level={4}>Species</Typography.Title>
      {data && <p>{data}</p>}
    </>
  );
};

export default HomeworldLink;
