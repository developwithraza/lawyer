import { Avatar, Dropdown, Menu, Space } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icons } from '../../common/icons';





function LawyerMenu() {

const navigate=useNavigate()
const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <p className='menuItem' style={{color:'green'}}>
                      Change password
                    </p>
                ),
            },
            {
                key: '2',
                label: (
                    <p style={{color:'red'}} className='menuItem' onClick={() => {
                        sessionStorage.clear()
                        navigate('/')
                    }}>
                     {Icons.logout}  <span>Logout</span>
                    </p>
                ),
            },

        ]}
    />
);

    


    return (

        <>
            <Space direction="vertical">
                <Space wrap>
                    <Dropdown overlay={menu} placement="bottomRight">
                        {
                          <Avatar
                                style={{
                                    backgroundColor: '#001B79',
                                }}
                                icon={Icons.user}
                            />
                        }


                    </Dropdown>

                </Space>
            </Space>
        </>
    )
}


export default LawyerMenu;