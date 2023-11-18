import { Button, Form, Input } from 'antd'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import './page.css'
import AllLawyerList from './AllLawyerList'
import AddLawyerModel from './AddLawyerModel'

function AllLawyer() {
  return (
    <section className='container'>
      <div className="setion_header">
        <div className="sec_title">
          <p>All Lawyers</p>
        </div>
        <div className="sec_action">
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
              addonBefore={<FiSearch style={{ color: "white", fontSize: "1.2rem" }} />}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <AddLawyerModel />
        </div>
      </div>
      <div className="section_content">
          <AllLawyerList />
      </div>
    </section>
  )
}

export default AllLawyer