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

const VehiclesList = () => {
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
      const result = await httpFactory.getVehicles();
      setData(result.listOfVehicles);
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
    const result = await httpFactory.getVehiclesFromId(search);
    setData(result.listOfVehicles);
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
      title: 'Manufacturer',
      dataIndex: 'manufacturer',
      onFilter: (value, record) => record.manufacturer.indexOf(value) === 0,
      sorter: (a, b) => a.manufacturer.length - b.manufacturer.length,
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
          placeholder='search starship'
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
        title={'Vehicles'}
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
                  <Text strong>Cargo Capacity</Text>
                  <p>{select.cargoCapacity || '-'}</p>
                  <Text strong>Model</Text>
                  <p>{select.model || '-'}</p>
                  <Text strong>Consumables</Text>
                  <p>{select.consumables || '-'}</p>
                  <Text strong>Cost in Credits</Text>
                  <p>{select.costInCredits || '-'}</p>
                  <Text strong>Crew</Text>
                  <p>{select.crew || '-'}</p>
                  <Text strong>Length</Text>
                  <p>{select.length || '-'}</p>
                  <Text strong>Manufacturer</Text>
                  <p>{select.manufacturer || '-'}</p>
                  <Text strong>Max atmosphering speed</Text>
                  <p>{select.maxAtmospheringSpeed || '-'}</p>
                  <Text strong>passengers</Text>
                  <p>{select.passengers || '-'}</p>
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

export default VehiclesList;
