import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, MenuOutlined, FundOutlined, BulbOutlined } from '@ant-design/icons';
import Icon  from '../images/logo.png'

const NavBar = () => {
  return (
    <div className='nav-container'>
       <div className='logo-container'>
     <Avatar src={Icon} size='large'/>
     <Typography.Title className='logo' level={2}>
<Link to='/'>The Coinage</Link>
     </Typography.Title>
     </div>
      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined/>}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>}>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}>
          <Link to='/barters'>Barters</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}>
          <Link to='/news'>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default NavBar