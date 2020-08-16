import React, { useEffect, useState } from 'react';
import {
  Table,
  Space,
  Button,
  Drawer,
  Typography,
  Card,
  Row,
  Col,
  Tag,
} from 'antd';
import httpFactory from '../../services/httpFactory/httpFactory';
import moment from 'moment';
const { Title, Text } = Typography;

const PlanetsList = () => {
  const [data, setData] = useState(null);
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
      console.log(result.listOfPlanets, null, 2);
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
      <Space style={{ marginBottom: 16 }} />
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
        name={'Film'}
        placement='right'
        onClose={() => setVisible(false)}
        width={'70vw'}
        visible={visible}>
        {select && (
          <>
            <Row gutter={[24, 24]}>
              <Col className='gutter-row' span={12}>
                <Card name='General information'>
                  <Text strong>Name</Text>
                  <p>{select.name || '-'}</p>
                  <Text strong>Gender</Text>
                  <p>{select.gender || '-'}</p>
                  <Text strong>Birth year</Text>
                  <p>{select.releaseDate || '-'}</p>
                </Card>
              </Col>
              <Col className='gutter-row' span={12}>
                <Card name='Meta information'>
                  <Text strong>Created</Text>
                  <p>
                    {select.created
                      ? moment(select.created).format('MM/DD/YYYY')
                      : '-'}
                  </p>
                  <Text strong>Edited</Text>
                  <p>
                    {select.edited
                      ? moment(select.edited).format('MM/DD/YYYY')
                      : '-'}
                  </p>
                </Card>
              </Col>
              <Col className='gutter-row' span={12}>
                <Card name='Physical information'>
                  <Text strong>Eye color</Text>
                  <p>{select.eyeColor || '-'}</p>
                  <Text strong>Hair color</Text>
                  <p>{select.hairColor || '-'}</p>
                  <Text strong>Height</Text>
                  <p>{select.height || '-'}</p>
                  <Text strong>Mass</Text>
                  <p>{select.mass || '-'}</p>
                  <Text strong>Skin color</Text>
                  <p>{select.skinColor || '-'}</p>
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
