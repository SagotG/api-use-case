import React, { useEffect, useState } from 'react';
import { Table, Space, Button } from 'antd';
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
    fetchData();
  }, []);

  const handleChange = (filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo(null);
  };

  const clearAll = () => {
    setFilteredInfo(null);
    setSortedInfo(null);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    { title: 'Birth Year', dataIndex: 'birthYear' },
    { title: 'Eye Color', dataIndex: 'eyeColor' },
    { title: 'Films', dataIndex: 'films' },
    { title: 'Gender', dataIndex: 'gender' },
    { title: 'HairColor', dataIndex: 'hairColor' },
    { title: 'Height', dataIndex: 'height' },
    { title: 'Homeworld', dataIndex: 'homeworld' },
    { title: 'Mass', dataIndex: 'mass' },
    { title: 'SkinColor', dataIndex: 'skinColor' },
    { title: 'Created', dataIndex: 'created' },
    { title: 'Edited', dataIndex: 'edited' },
    { title: 'Species', dataIndex: 'species' },
    { title: 'Starships', dataIndex: 'starships' },
    { title: 'Url', dataIndex: 'url' },
    { title: 'Vehicles', dataIndex: 'vehicles' },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table
        columns={columns}
        loading={loading}
        dataSource={data}
        onChange={handleChange}
      />
    </>
  );
};

export default PeopleList;
