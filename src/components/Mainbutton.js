import React from 'react';
import {Button} from 'antd';

const Mainbutton = ({btnText,btnClass, disabled, type})=>{
    return <Button className={btnClass}  htmlType={type}> {btnText} </Button>
}

export default Mainbutton