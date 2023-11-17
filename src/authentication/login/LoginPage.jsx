import React, { useEffect, useState } from 'react'
import './loginpage.css'
import 'antd/dist/antd.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Divider, Form, Input, Spin, message } from 'antd';
import { LoginLawyer } from '../../service/api_services'


function LoginPage() {
  const navigate = useNavigate()
  const [isLoding, setIsLoading] = useState(false)
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const body = {
    "email": loginData.email,
    "password": loginData.password
  }

  const submithandler = async () => {

    await LoginLawyer(body).then(res => {
      console.log(res);
      setIsLoading(true)
      if (res.status == 201) {
        sessionStorage.setItem("userInfo", JSON.stringify(res.data))
        setIsLoading(false)
        navigate('/dashboard/all_lawyer')
      }
    }).catch(err => {
      message.error(err.message);

    })
  }

  const handleChange = (propertyName) => (event) => {
    setLoginData((loginData) => ({
      ...loginData, [propertyName]: event.target.value
    }))
    console.log(loginData);
  }

 


  return (

    <div className='loginSection'>
      <div className="login">
        <div className="loginLogo">
          <p><span style={{ fontWeight: "600", color: "white", fontSize: "2rem" }}>Lorem ipsum </span>dolor, sit amet consectetur adipisicing elit. Reiciendis, beatae!</p>
        </div>
        <div className="loginField">
          <p>Welcome Back !!</p>
          <h1>Sign-in</h1>
          <Button type='primary' ><span><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" /></span>Sign-in with google</Button>
          <Divider>or</Divider>
          <Form
            layout='vertical'
            name="basic"
            labelCol={{
              span: 12,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="on"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input
                placeholder="Email"
                value={loginData.email}
                onChange={handleChange("email")}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange("password")}
              />
            </Form.Item>


            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 8,
              }}
            >
              <Button type="primary" onClick={submithandler} disabled={isLoding == true}>
                {isLoding == true ? <Spin /> : "Login"}
              </Button>
            </Form.Item>
          </Form>
          <p>Don't have an account ? <Link to='signup'>Signup here</Link></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
