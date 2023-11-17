import React from 'react'
import './dashboard.css'
import Navbar from '../../navbar/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import Sidebar from '../../sidebar/Sidebar'
import AllLawyer from '../../../pages/AllLawyer'





function Dashboards() {
    return (
        <div className="dashboard">
            <div className="sidebarSection">
                <Sidebar />
            </div>
            <div className="contentSection">
                <div className="navbarSections">
                    <Navbar />
                </div>
                <div className="childroute">
                    <Outlet />
                </div>
            </div>


        </div>

    )
}




export default Dashboards
