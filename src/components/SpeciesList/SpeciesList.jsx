/* eslint-disable no-unused-vars */
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
const { Text } = Typography;

const SpeciesList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState(null);
  const [sortedInfo, setSortedInfo] = useState(null);
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await httpFactory.getSpecies();
      console.log(result);
      setData(result.listOfSpecies);
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
      title: 'Designation',
      dataIndex: 'designation',
      onFilter: (value, record) => record.designation.indexOf(value) === 0,
      sorter: (a, b) => a.designation.length - b.designation.length,
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
        title={'Species'}
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
                  <Text strong>Eye color</Text>
                  <p>{select.eyeColor || '-'}</p>
                  <Text strong>Skin Colors</Text>
                  <p>{select.skinColors || '-'}</p>
                  <Text strong>Hair color</Text>
                  <p>{select.hairColor || '-'}</p>
                  <Text strong>Height</Text>
                  <p>{select.height || '-'}</p>
                  <Text strong>Mass</Text>
                  <p>{select.mass || '-'}</p>
                  <Text strong>Skin color</Text>
                  <p>{select.skinColor || '-'}</p>
                  <Text strong>Average Height</Text>
                  <p>{select.averageHeight || '-'}</p>
                  <Text strong>Average Lifespan</Text>
                  <p>{select.averageLifespan || '-'}</p>
                  <Text strong>Average Lifespan</Text>
                  <p>{select.averageLifespan || '-'}</p>
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
            </Row>
          </>
        )}
      </Drawer>
    </>
  );
};

export default SpeciesList;
