import React from 'react'
import { Result,Button } from "antd";
import { SmileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Finish = () => {
  var navv = useNavigate()
  function nav(){
    navv('/')
  }
  return (
    <div style={{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary" onClick={nav}>DONE</Button>}/>
    </div>
  )
}

export default Finish
