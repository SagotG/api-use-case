import React, { useEffect, useState } from 'react';
import { Table, Space, Button, List } from 'antd';
import httpFactory from '../../services/httpFactory/httpFactory';

const PeopleList = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState(null);
  const [sortedInfo, setSortedInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await httpFactory.getPeople();
      console.log(JSON.stringify(result, null, 2));
      setData(result.listOfPeople);
    };
    fetchData().finally(setLoading(false));
  }, []);

  const handleChange = (filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Birth Year',
      dataIndex: 'birthYear',
    },
    // { title: 'Eye Color', dataIndex: 'eyeColor' },
    {
      title: 'Films',
      dataIndex: 'films',
      render: (value, record) => (
        <List
          size='small'
          dataSource={value}
          renderItem={(record) => (
            <List.Item>{httpFactory.getFilmsFromId(record)}</List.Item>
          )}
        />
      ),
    },
    {
      title: 'Starships',
      dataIndex: 'starships',
      render: (value, record) => (
        <List
          size='small'
          dataSource={value}
          renderItem={(record) => <List.Item>{record}</List.Item>}
        />
      ),
    },
    {
      title: 'Vehicles',
      dataIndex: 'vehicles',
      render: (value, record) => (
        <List
          size='small'
          dataSource={value}
          renderItem={(record) => <List.Item>{record}</List.Item>}
        />
      ),
    },
    {
      title: 'Details',
      render: (value, record) => (
        <Button onClick={() => alert(true)}>See more</Button>
      ),
    },
    // { title: 'Gender', dataIndex: 'gender' },
    // { title: 'HairColor', dataIndex: 'hairColor' },
    // { title: 'Height', dataIndex: 'height' },
    // { title: 'Homeworld', dataIndex: 'homeworld' },
    // { title: 'Mass', dataIndex: 'mass' },
    // { title: 'SkinColor', dataIndex: 'skinColor' },
    // { title: 'Created', dataIndex: 'created' },
    // { title: 'Edited', dataIndex: 'edited' },
    // { title: 'Species', dataIndex: 'species' },
    // { title: 'Url', dataIndex: 'url' },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }} />
      <Table
        rowKey={(record) => record.name}
        columns={columns}
        loading={loading}
        dataSource={data}
        onChange={handleChange}
      />
    </>
  );
};

export default PeopleList;
