
import './sidebar.css'
import { Divider, Menu, Switch } from 'antd';
import React, { useState } from 'react';
import './sidebar.css'
import { NavLink } from 'react-router-dom';
import { Icons } from '../../common/icons';



const Sidebar = () => {
    return (
        <div className='sidebarMenuItem'>
            <Menu className='sidebarMenu' defaultSelectedKeys={true} theme="dark">
                <p>Admin</p>
                {/* <Menu.Item key="1" defaultSelectedKeys={true} className='sideItem'><NavLink to='/dashboard'>{Icons.quote}<span className='sideItemTitle'>Dashboard</span></NavLink></Menu.Item> */}
                <Menu.Item key="2" defaultSelectedKeys={true} className='sideItem'><NavLink to='/dashboard/all_lawyer'>{Icons.quote}<span className='sideItemTitle'>Lawyers</span></NavLink></Menu.Item>
                <Menu.Item key="3" className='sideItem'><NavLink to='/dashboard/user'>{Icons.task}<span className='sideItemTitle'>Total Users</span></NavLink></Menu.Item>
                <Menu.Item key="4" className='sideItem'><NavLink to='/dashboard/cases'>{Icons.project}<span className='sideItemTitle'>Cases</span></NavLink></Menu.Item>
                <Menu.Item key="5" className='sideItem'><NavLink to='/dashboard/dept'>{Icons.print}<span className='sideItemTitle'>Departments</span></NavLink></Menu.Item>
                <Menu.Item key="6" className='sideItem'><NavLink to='/dashboard/notify'>{Icons.print}<span className='sideItemTitle'>Notifications</span></NavLink></Menu.Item>
                <Menu.Item key="7" className='sideItem'><NavLink to='/dashboard/meet'>{Icons.print}<span className='sideItemTitle'>Meeting</span></NavLink></Menu.Item>
                <Menu.Item key="8" className='sideItem'><NavLink to='/dashboard/book'>{Icons.print}<span className='sideItemTitle'>Booking</span></NavLink></Menu.Item>
                <Menu.Item key="9" className='sideItem'><NavLink to='/dashboard/service'>{Icons.print}<span className='sideItemTitle'>Services</span></NavLink></Menu.Item>
                <Menu.Item key="10" className='sideItem'><NavLink to='/dashboard/banner'>{Icons.print}<span className='sideItemTitle'>Banners</span></NavLink></Menu.Item>
                <Menu.Item key="11" className='sideItem'><NavLink to='/dashboard/file'>{Icons.print}<span className='sideItemTitle'>All Files</span></NavLink></Menu.Item>
                <Menu.Item key="12" className='sideItem'><NavLink to='/dashboard/todo'>{Icons.print}<span className='sideItemTitle'>To do list</span></NavLink></Menu.Item>
                <Menu.Item key="12" className='sideItem'><NavLink to='/dashboard/permission'>{Icons.print}<span className='sideItemTitle'>Permissions</span></NavLink></Menu.Item>
                <Menu.Item key="14" className='sideItem'><NavLink to='/dashboard/msg'>{Icons.print}<span className='sideItemTitle'>Messaging</span></NavLink></Menu.Item>
               

            </Menu>
        </div>
    );
};



export default Sidebar
