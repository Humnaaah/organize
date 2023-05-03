import React,{useState} from 'react';
import { Form, Input, Button,message } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/core-images/ebutler.png";
import Inputfield from '../../components/Inputfield';
const formRef = React.createRef();

const key = 'updatable';

const ForgetPassword=()=>{
    const navigate = useNavigate();
    const [emailVal, setEmailVal] = useState('');

    const onFinish = (values) => {
        console.log("Received values of form: ", values);

      };
      const  onReset = () => {
        // formRef.current.resetFields();
        message.loading({
            content: 'Sending.',
            key,
          });
          setTimeout(() => {
            message.success({
              content: 'Password Re-set link has been sent to your Email',
              key,
              duration: 4,
            });
            navigate("/")
          }, 1500);
        
      };
    return(
        <div className="main">
        <div className="container">
          <div className="row ">
            <div className="col-lg-7 centered">
            <div className="text-center mtt-20-per">
                  <img src={Logo} className="logo-default"/>
                  </div>
              <div className="container-section ">
                    <hr/>
                    <h1 className="default-heading"> Please enter your email address to sent password reset link.</h1>
                    <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  ref={formRef}
                  autoComplete="no"
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" className={"inputfield"}  autoComplete="none"/>
                  </Form.Item>
                  <Form.Item>
                    <div className="text-center">
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="mainBtn"
                        onClick={onReset}
                      >
                       Confirm
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

export default ForgetPassword