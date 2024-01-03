import { Table } from "antd";
import { useEffect, useState } from "react";
import { Myaxios } from "../service/Myaxios";


const columns = [
  {
    title: 'Budget Distribution Recommendation',
    dataIndex: 'budget',
    key: 'budget',
  },
  {
    title: 'Previous Period Spend',
    dataIndex: 'previous',
    key: 'previous',
  },
  {
    title: 'Change in Budget by %',
    dataIndex: 'change',
    key: 'change',
  },
  {
    title: 'Change in Budget by Absolute',
    dataIndex: 'absolute',
    key: 'absolute',
  },
];

const data=[{
    key:'',
     budget: '',
    previous: '',
    change: '',
    absolute: '',
}]
const TableChart = () => {
const [datas,setdata]=useState([])
    useEffect(()=>{
        Myaxios.get('/read-excel').then((res)=>{
        setdata(res.data)
        }).catch((err)=>console.log(err))
    },[])
    useEffect(()=>{console.log(datas)
        
   
    },[datas])
    return (
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p
                style={{
                  margin: 0,
                }}
              >
                {record.absolute}
              </p>
            ),
            rowExpandable: (record) => record.budget !== 'Not Expandable',
          }}
          dataSource={data}
        />
      );
    };
    
export default TableChart;
