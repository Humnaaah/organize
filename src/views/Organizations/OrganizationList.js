import React, { useState } from 'react';
import {Button,Select} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import TableComponent from '../../components/TableComponent';

const { Option } = Select;
const data = [];

const OrganizationList=()=>{
    const [loading, setLoading] = useState(false);
    const [activeStatus, setActiveStatus] = useState('active');

    const handleChange = (value) => {
        setActiveStatus(value)
      };
 
   

    for (let i = 1; i <= 7; i++) {
        data.push({
          key: i,
          id:i,
          building: `Building ${i}`,
          countries:'Pakistan',
          action: "active"
        });
      }
    const columns = [
        {
            title: '',
            dataIndex: 'id',
            width: 100,
          },
        {
          title: 'Building',
          dataIndex: 'building',
          responsive: ['md'],
        },
        {
          title: 'Countries',
          dataIndex: 'countries',
          responsive: ['md'],
        },
        {
          title: 'Action',
          key: 'action',
          responsive: ['md'],
          render: () => (
            <Select defaultValue={activeStatus} onChange={handleChange}  status={activeStatus === "active" ? "warning" : "error"} style={{ width: 120 }} >
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
          </Select>
          ),
        },
      ];
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8'>
                        <TableComponent columns={columns} data={data} pageSize={"7"}/>
                </div>
                <div className='col-lg-1'> </div>
                <div className='col-lg-3 align-right'>
                <Button
                        type="primary"
                        className="LgBtn"
                      >
                        <PlusOutlined />  Add New Building / Organization
                      </Button>
                </div>
            </div>
        </div>
    )
}
export default OrganizationList