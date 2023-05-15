import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Space, Table, Tag } from 'antd';
const AppModal = ({ isModalOpen, setIsModalOpen }) => {

const { userdetail } = useSelector(state => state.users)


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const columns = [
        {
            title: 'ConsumedQuantity',
            dataIndex: 'ConsumedQuantity',
            key: 'consumedQuantity',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Cost',
            dataIndex: 'Cost',
            key: 'cost',
        },
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'date',
        },
        {
            title: 'MeterCategory',
            dataIndex: 'MeterCategory',
            key: 'meterCategory',
        },
        {
            title: 'ResourceGroup',
            dataIndex: 'ResourceGroup',
            key: 'resourceGroup',
        },
        {
            title: 'ResourceLocation',
            dataIndex: 'ResourceLocation',
            key: 'resourceLocation',
        },


        {
            title: 'UnitOfMeasure',
            dataIndex: 'UnitOfMeasure',
            key: 'unitOfMeasure',
        },
        {
            title: 'Location',
            dataIndex: 'Location',
            key: 'location',
        },
        {
            title: 'ServiceName',
            dataIndex: 'ServiceName',
            key: 'serviceName',
        },

        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, record) => (
        //         <Space size="middle">
        //             <a>Invite {record.name}</a>
        //             <a>Delete</a>
        //         </Space>
        //     ),
        // },
    ];





    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>

            <Modal title="User List" style={{ width: "100vh", height: "100vh" }} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {/* {appData.map((app,index)=>(
          <p key={index}>{app.ServiceName}</p>
         ))} */}
                <Table style={{
                    overflow: "auto",
                    width: "100vh", height: "100vh"
                }} columns={columns} dataSource={userdetail} />
            </Modal>
        </>
    );
};
export default AppModal;