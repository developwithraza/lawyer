import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './page.css'
import AddLawyer from './AddLowyer';



function AddLawyerModel() {
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
      <Button type='defauld' onClick={showModal}  >
        Add New Lawyer
      </Button>
      <div className='create_post'>
        <Modal title="Add Lawyer" width={700} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false} style={{
          top: 20,
        }}>
          <AddLawyer />
        </Modal>
      </div>
    </div >
  );
}


export default AddLawyerModel