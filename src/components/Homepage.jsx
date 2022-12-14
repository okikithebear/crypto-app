import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';


const { Title } = Typography;


const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
   console.log(data);

   if(isFetching) return 'Loading...'

  return (
    <>
    <Title level={2} className='heading'>
      Global Crypto Data
    </Title>
    <Row>
      <Col span={12}><Statistic title='Total Cryptocurrencies' value='5'/></Col>
      <Col span={12}><Statistic title='Total Barters' value='5'/></Col>
      <Col span={12}><Statistic title='Total Market Cap' value='5'/></Col>
      <Col span={12}><Statistic title='Total 24hr Volume' value='5'/></Col>
      <Col span={12}><Statistic title='Total Markets' value='5'/></Col>
    </Row>
    </>
  )
}

export default Homepage