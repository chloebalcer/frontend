import React from 'react';
import { Table} from 'antd';

const columns = [
    {
      title: 'SUBJECT',
      dataIndex: 'title',
      key: 'title',
      render: text => <a>{text}</a>,
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'description',
      key: 'description',
    },
    {
        title: 'LEVEL',
        dataIndex: 'level',
        key: 'level',
      },
   
  ];
  

const Exercises = (props) => {
    var container = {
        marginLeft: '50px',
        marginRight: '50px'

      };
    return(
        <div style={container}>
        <Table columns={columns} dataSource={props.data} />
        </div>
    )
}

export default Exercises;