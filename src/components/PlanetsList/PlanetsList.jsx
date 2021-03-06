/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Table,
  Space,
  Button,
  Drawer,
  Input,
  Typography,
  Card,
  Row,
  Col,
  Tag,
} from 'antd';
import httpFactory from '../../services/httpFactory/httpFactory';
import moment from 'moment';

const { Text } = Typography;

const PlanetsList = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState(null);
  const [sortedInfo, setSortedInfo] = useState(null);
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await httpFactory.getPlanets();
      setData(result.listOfPlanets);
    };

    fetchData().finally(setLoading(false));
  }, []);

  const handleChange = (filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const setDrawer = (values) => {
    setVisible(!visible);
    setSelect(values);
  };

  const research = async (value) => {
    setSearch(value);
    const result = await httpFactory.getPlanetsFromId(search);
    setData(result.listOfPlanets);
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
      title: 'Population',
      dataIndex: 'population',
      onFilter: (value, record) => record.population.indexOf(value) === 0,
      sorter: (a, b) => a.population.length - b.population.length,
      sortDirections: ['descend'],
      render: (value, record) => (
        <Tag color={'geekblue'} key={value}>
          {value}
        </Tag>
      ),
    },
    {
      title: 'Details',
      align: 'right',
      render: (value, record) => (
        <Button type='primary' size={'small'} onClick={() => setDrawer(record)}>
          See more
        </Button>
      ),
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Input.Search
          placeholder='search planet'
          enterButton
          onChange={(e) => research(e.target.value)}
        />
      </Space>
      <Table
        size='small'
        rowKey={(record) => record.name}
        columns={columns}
        loading={loading}
        dataSource={data}
        onChange={handleChange}
        pagination={false}
      />
      <Drawer
        title={'Planets'}
        placement='right'
        onClose={() => setVisible(false)}
        width={'70vw'}
        visible={visible}>
        {select && (
          <>
            <Row gutter={[24, 24]}>
              <Col className='gutter-row' span={12}>
                <Card title='General information'>
                  <Text strong>Name</Text>
                  <p>{select.name || '-'}</p>
                  <Text strong>Orbital Period</Text>
                  <p>{select.orbitalPeriod || '-'}</p>
                  <Text strong>Rotation Period</Text>
                  <p>{select.rotationPeriod || '-'}</p>
                  <Text strong>Gravity</Text>
                  <p>{select.gravity || '-'}</p>
                  <Text strong>Diameter</Text>
                  <p>{select.diameter || '-'}</p>
                  <Text strong>Climate</Text>
                  <p>{select.climate}</p>
                  <Text strong>Surface Water</Text>
                  <p>{select.surfaceWater === 1 ? 'yes' : 'no' || '-'}</p>
                </Card>
              </Col>
              <Col className='gutter-row' span={12}>
                <Card name='Meta information'>
                  <Text strong>Created</Text>
                  <p>
                    {select.created
                      ? moment(select.created).format('DD/MM/YYYY')
                      : '-'}
                  </p>
                  <Text strong>Edited</Text>
                  <p>
                    {select.edited
                      ? moment(select.edited).format('DD/MM/YYYY')
                      : '-'}
                  </p>
                </Card>
              </Col>
              <Col className='gutter-row' span={12}>
                <Card name='Population information'>
                  <Text strong>Population</Text>
                  <p>{select.population || '-'}</p>
                  <Text strong>Resident</Text>
                  <p>{select.resident || '-'}</p>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Drawer>
    </>
  );
};

export default PlanetsList;
