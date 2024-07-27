import React from 'react'
import { Result, Button } from "antd";
import { SmileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Finish = () => {
  var navv = useNavigate()
  function nav() {
    navv('/')
  }
  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Result
        icon={<SmileOutlined />}
        extra={<div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
          <h1 style={{color:"#aaa"}}>Great, we have done all the operations!</h1>
          <Button type="primary" onClick={nav}>DONE</Button>
          <p style={{color:"#ccc"}}>Developed By AzaanUllah Khan</p>
        </div>
        } />
    </div>
  )
}

export default Finish
