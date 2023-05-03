import React from "react";
import { Form, Input, Button } from "antd";
import { Link,useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/core-images/ebutler.png";


const SigninUi = () => {
  const navigate = useNavigate();
  
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="main">
        <div className="container">
          <div className="row ">
            <div className="col-lg-7 centered">
              <div className="container-section mtt-20-per">
              <div className="text-center">
                  <img src={Logo} className="logo-default"/>
                  </div>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
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
                      autoComplete="none"
                    />
                  </Form.Item>

                  <Form.Item>
                    <div className="text-center">
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="mainBtn"
                      >
                        Log In
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
                <hr /> 
                <div className="text-center">
                <Link to="/forgetpassword" className="default-link"> Forgotten password? </Link>
                
                {/* <Button
                        type="primary"
                        htmlType="submit"
                        className="secBtn"
                        onClick={()=> navigate("/register")}
                      >
                      Create a New Account
                      </Button> */}
                </div>
           
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SigninUi;
