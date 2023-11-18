import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './page.css'
import { MdEdit } from 'react-icons/md';
import UpdateLawyer from './UpdateLawyer';



function UpdateLawyerModel() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='modalBtn'>
            < MdEdit className='data_act_icon' onClick={showModal} />
            <div className='create_post'>
                <Modal title="Edit Lawyer" width={700} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false} style={{
                    top: 20,
                }}>
                    <UpdateLawyer />
                </Modal>
            </div>
        </div >
    );
}


export default UpdateLawyerModel