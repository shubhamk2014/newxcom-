import { Row,Col } from 'antd';
import React from 'react'
import Navbar from './Navbar';

import { Outlet } from 'react-router-dom';


function Home() {
  return (
    <>
    <Row >
      <Navbar/>
    </Row>
    <Row style={{display:'flex',justifyContent:'center',alignSelf:'center'}}>
     <Col >
     <Outlet/>
     </Col>
    </Row>
    </>
  )
}

export default Home;