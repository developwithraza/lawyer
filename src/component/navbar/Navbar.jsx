import React from 'react'
import './navbar.css'
import LawyerMenu from './LawyerMenu'
import { FiSearch } from "react-icons/fi";
import { Form, Input } from 'antd';
import { AiOutlineHistory, AiOutlineSetting } from 'react-icons/ai';
import { BsSliders } from "react-icons/bs";


function Navbar() {
  const actionHandle=()=>{
    alert('sorry no any action')
  }
  return (
    <div className='navbarSection'>
      <div className="navmenus">
        <div className="navs">
          <LawyerMenu />
        </div>
        <div className="nav_title">
          <p>Mr. Admin</p>
          <p>Lorem, ipsum.</p>
        </div>
      </div>
      <div className="nav_Action">
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
          placeholder='Search in admin pannel'
            addonBefore={<FiSearch style={{color:"white",fontSize : "1.2rem"}}/>}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
        <AiOutlineSetting className='act_Icon' onClick={actionHandle}/>
        <AiOutlineHistory className='act_Icon' onClick={actionHandle}/>
        <BsSliders className='act_Icon' onClick={actionHandle}/>
      </div>
    </div>
  )
}

export default Navbar
