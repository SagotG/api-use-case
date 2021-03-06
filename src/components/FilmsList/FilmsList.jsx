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

const FilmsList = () => {
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
      const result = await httpFactory.getFilms();
      setData(result.listOfFilms);
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
    const result = await httpFactory.getFilmsFromId(search);
    setData(result.listOfFilms);
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
      <Space style={{ marginBottom: 16 }}>
        <Input.Search
          placeholder='search films'
          enterButton
          onChange={(e) => research(e.target.value)}
        />
      </Space>

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
                  <Text strong>Episode number</Text>
                  <p>{select.episode_id || '-'}</p>
                  <Text strong>Release Date</Text>
                  <p>
                    {select.releaseDate !== null
                      ? moment(select.releaseDate).format('DD/MM/YYYY')
                      : '-'}
                  </p>
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
                <Card title='Technical information'>
                  <Text strong>Director</Text>
                  <p>{select.director || '-'}</p>
                  <Text strong>Producer</Text>
                  <p>{select.producer || '-'}</p>
                  <Text strong>Opening Crawl</Text>
                  <p>{select.openingCrawl || '-'}</p>
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
