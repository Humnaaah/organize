import React from 'react'
import { Form, Input, Button,DatePicker,Select, Radio,Upload} from "antd";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import Logo from "../../assets/images/core-images/ebutler.png";

const Signup = ()=> {
    const { Option } = Select;
     const children = [];
     for (let i = 1; i <= 31; i++) {
        children.push(<Option key={i}>{i}</Option>);
      }
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
      };
      const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
      const handleSelect = (value) => {
        console.log(`Selected: ${value}`);
      };
      const normFile = (e) => {
        console.log('Upload event:', e);
      
        if (Array.isArray(e)) {
          return e;
        }
      
        return e?.fileList;
      };
     
    return(
        <div className="main">
        <div className="container">
          <div className="row ">
            <div className="col-lg-10 centered">
              <div className="container-section mtt-11-per">
              <div className="text-center">
                  <img src={Logo} className="logo-default"/>
                  </div>
                  <h1 className='default-heading'> Sign Up</h1>
                  <span className='second-head'> It's quick and easy.</span>
                  <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                    <div className='row'>
                        <div className='col-lg-6'> 
                            <div className='row'>
                                <div className='col-lg-6'>
                                <Form.Item
                                    name="firstname"
                                    rules={[
                                    {
                                        required: true,
                                        message: "Please input your firstname",
                                    },
                                    ]}
                                >
                                    <Input placeholder="Firstname" className={"inputfield"} />
                                </Form.Item>
                                     </div>
                                <div className='col-lg-6'> 
                                <Form.Item
                                    name="lastname"
                                    rules={[
                                    {
                                        required: true,
                                        message: "Please input your lastname",
                                    },
                                    ]}
                                >
                                    <Input placeholder="Lastname" className={"inputfield"} />
                                </Form.Item>
                                </div>
                            </div>
                            <Form.Item
                                    name="registration"
                                    rules={[
                                    {
                                        required: true,
                                        message: "Please input your phone number or email",
                                    },
                                    ]}
                                >
                                    <Input placeholder="Email or Phone Number" className={"inputfield"} />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password
                                    className={"inputfield"}
                                    placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="confirm"
                                    dependencies={['password']}
                                    rules={[
                                        {
                                          required: true,
                                          message: 'Please confirm your password!',
                                        },
                                        ({ getFieldValue }) => ({
                                          validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                              return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                          },
                                        }),
                                      ]}
                                    hasFeedback
                                >
                                    <Input.Password
                                    className={"inputfield"}
                                    placeholder="Confirm Password"
                                    />
                                </Form.Item>
                        </div>
                        <div className='col-lg-6'> 
                        <div className='row'>
                            <div className='col-lg-4'>
                            <Form.Item
                                    name="birthdate"
                                    rules={[
                                    {
                                        required: true,
                                        message: "Please input birthdate",
                                    },
                                    ]}
                                >
                                    <Select
                                        placeholder="Please select"
                                        onChange={handleSelect}
                                        style={{
                                        width: '100%',
                                        
                                        }}
                                    >
                                        {children}
                                    </Select>
                                    </Form.Item>
                            </div>
                            <div className='col-lg-4'>
                            <Form.Item
                                    name="birthmonth"
                                    rules={[
                                    {
                                        required: true,
                                        message: "Please input birthmonth",
                                    },
                                    ]}
                                >
                                     <DatePicker onChange={onChange} picker="month" className={"inputfield"} />
                                    </Form.Item>
                            </div>
                            <div className='col-lg-4'>
                            <Form.Item
                                    name="birthmonth"
                                    rules={[
                                    {
                                        required: true,
                                        message: "Please input birthyear",
                                    },
                                    ]}
                                >
                                     <DatePicker onChange={onChange} picker="year" className={"inputfield"} />
                                    </Form.Item>
                            </div>
                        </div>
                        <Form.Item
                        className="mtt-12"
                            name="gender"
                            rules={[
                            {
                                required: true,
                                message: 'Please select gender',
                            },
                            ]}
                        >
                            <Radio.Group buttonStyle="outlined" >
                              <Radio.Button  value="male">Male</Radio.Button>
                              <Radio.Button value="female">Female</Radio.Button>
                            </Radio.Group>
                        </Form.Item>    
                        </div>
                    </div>
                    <a className="default-link"> By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time. </a>
                    <Form.Item
                     rules={[
                      {
                          required: true,
                          message: "Please upload picture",
                      },
                      ]}
                        name="upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />} className="mainBtn mtt-20">Upload Document</Button>
                        </Upload>
                    </Form.Item>
                  

                  <Form.Item>
                    <div className="text-center">
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="mainBtn"
                      >
                        Sign Up
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
    )
}


export default Signup