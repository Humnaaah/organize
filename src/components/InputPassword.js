import React from 'react';
import {Input} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const InputPassword = ({holder,valueFunction,value})=>{
    return  <Input.Password
    className={"inputfield"}
    value={value}
    type="password"
    placeholder={holder}
    onChange={valueFunction}
    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
  />
}

export default InputPassword