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
import { FilmsLink, ShipsLink, HomeworldLink } from '../index';

const { Text } = Typography;

const PeopleList = () => {
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
      const result = await httpFactory.getPeople();
      setData(result.listOfPeople);
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
    const result = await httpFactory.getPeopleFromId(search);
    setData(result.listOfPeople);
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
          placeholder='search people'
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
        title={'People'}
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
                  <Text strong>Gender</Text>
                  <p>{select.gender || '-'}</p>
                  <Text strong>Birth year</Text>
                  <p>{select.birthYear || '-'}</p>
                </Card>
              </Col>
              <Col className='gutter-row' span={12}>
                <Card title='Meta information'>
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
                <Card title='Extra information'>
                  <FilmsLink {...select} />
                  <ShipsLink {...select} />
                  <HomeworldLink {...select} />
                </Card>
              </Col>
              <Col className='gutter-row' span={12}>
                <Card title='Physical information'>
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

export default PeopleList;
