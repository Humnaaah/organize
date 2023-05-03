import React from 'react';
import { Input } from 'antd';

const Inputfield =({holder, name, type, value, valueFunction})=>{
    return <Input placeholder={holder} className={"inputfield"} name={name} type={type} value={value} onChange={valueFunction}/>
}

export default Inputfield