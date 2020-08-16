import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Typography } from 'antd';

const CharactersLink = (props) => {
  const [url, setUrl] = useState(props.films);
  const [data, setData] = useState(null);
  useEffect(() => {
    setUrl(props.films);
    let films = [];
    if (url) {
      url.map((item) => {
        if (item) {
          Axios.get(item).then((res) => {
            films.push(res.data.title);
          });
        }
      });
      setTimeout(() => {
        console.log(films);
        setData(films);
      }, 500);
    }
  }, [props, props.films]);

  return (
    <>
      <Typography.Title level={4}>Characters</Typography.Title>
      {data && data.map((item, key) => <p key={key}>{item}</p>)}
    </>
  );
};

export default CharactersLink;
