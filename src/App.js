import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space  } from 'antd'; 

import { NavBar, Barters, Cryptocurrencies, CryptoDetails,News, Homepage } from './components';
import './App.css'

const App = () => {
  return (
     <div className="app">
     <div className="navbar">
       <NavBar />
     </div>
     <div className="main">
       <Layout>
         <div className="routes">
             <Routes>
                <Route exact path="/" element={<Homepage />}/>
                <Route exact path="/barters" element={<Barters />}/>
                <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>} />
                <Route exact path="/crypto/:coinId" element={<CryptoDetails />}/>
                <Route exact path="/news" element={<News />}/>
             </Routes>
         </div>
       </Layout>
       
         <div className='footer' >
          <Typography.Title level={5} style={{color: 'steelblue', textAlign: 'center'}}>
              The Coinage <br/>
              &copy;  All right reserved, 2022.
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/barters'>Barters</Link>
            <Link to='/news'>News</Link>
          </Space>
          </div>
         </div>
    </div>
  )
}
export default App