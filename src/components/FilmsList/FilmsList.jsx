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

const FilmsList = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState(null);
  const [sortedInfo, setSortedInfo] = useState(null);
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await httpFactory.getFilms();
      setData(result.listOfFilms);
      console.log(result, null, 2);
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
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      onFilter: (value, record) => record.title.indexOf(value) === 0,
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Release date',
      dataIndex: 'releaseDate',
      render: (value) => (
        <Tag color={'geekblue'} key={value}>
          {moment(value).format('DD / MM / YYYY')}
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
        rowKey={(record) => record.title}
        columns={columns}
        loading={loading}
        dataSource={data}
        onChange={handleChange}
        pagination={false}
      />
      <Drawer
        title={'Film'}
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
                  <p>{select.title || '-'}</p>
                  <Text strong>Gender</Text>
                  <p>{select.gender || '-'}</p>
                  <Text strong>Birth year</Text>
                  <p>{select.releaseDate || '-'}</p>
                </Card>
              </Col>
              <Col className='gutter-row' span={12}>
                <Card title='Meta information'>
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

export default FilmsList;