import React, { useState } from 'react';
import { Table} from 'antd';

const TableComponent = ({columns, data , pageSize}) => {
    const [hasData, setHasData] = useState(true);
    return(
        <div> 
        <Table
            showHeader={true}
                pagination={{
                position:"bottom",
                pageSize: pageSize
                }}
                columns={columns}
                dataSource={hasData ? data : []}
      />
      </div>
    )
}
export default TableComponent