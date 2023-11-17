import React from 'react'
import { AllLowyers } from '../service/api_services';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spin } from 'antd';
import './page.css'
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function AllLawyerList() {
    const [lowList, setLawList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const LowyerList = async () => {
        await AllLowyers().then(res => {
            setIsLoading(true)
            console.log('lowyer list', res.data);
            if (res.status == 200) {
                setLawList(res.data.data)
                setIsLoading(false)
            }
        }).catch(err => {
            console.log(err.response.msg);
        })
    }
    useEffect(() => {
        LowyerList()
    }, [])

    const handleDelete=()=>{
        alert("no action perform, time too much sonsume")
    }
    const handleUpdate=()=>{
        alert("no action perform, time too much sonsume")
    }

    return (
        <section id='list'>
            {isLoading == true ? <div style={{ textAlign: "center" }}><Spin style={{ padding: "1rem" }} /></div> :
                <div className="tabls">
                    <div className="table_header">
                        <div className="header_item">
                            <p style={{ visibility: "hidden" }}>status</p>
                        </div>
                        <div className="header_item">
                            <p>Lawyer Name</p>
                        </div>
                        <div className="header_item">
                            <p>Email</p>
                        </div>
                        <div className="header_item">
                            <p>Phone No</p>
                        </div>
                        <div className="header_item">
                            <p>Total Consultations</p>
                        </div>
                        <div className="header_item">
                            <p style={{ visibility: "hidden" }}>Action</p>
                        </div>
                    </div>
                    {lowList.map((item) => {
                        return (
                            <div className="lowyer_data" key={item._id}>
                                <div className="data_item">
                                    {item.experiance > 50 ? <p className='old'>Old</p> : <p className='new'>New</p>}
                                </div>
                                <div className="data_items">
                                    <img src={item.barRegistrationImage} />
                                    <p>{item.fullName}</p>
                                </div>
                                <div className="data_item">
                                    <p>{item.email}</p>
                                </div>
                                <div className="data_item">
                                    <p>{item.phone}</p>
                                </div>
                                <div className="data_item">
                                    <p>{item.consultancyCost}</p>
                                </div>
                                <div className="data_act_item">
                                    <MdDeleteOutline className='data_act_icon' onClick={handleDelete}/>
                                    < MdEdit className='data_act_icon' onClick={handleUpdate}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </section>
    )
}

export default AllLawyerList