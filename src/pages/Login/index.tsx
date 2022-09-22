import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useLogin } from '../../Components/Authentication/hooks/useLogin';
import { LoginRequestPayload } from '../../models/user';

const Login = () => {
  const { mutate: loginUser, isLoading } = useLogin()
  const onFinish = (data: LoginRequestPayload) => {
    loginUser(data);
  };
  return (
    <div className="login">
      <div className="login-box">
        <div className="login-box__left">
          <div className="login-box__left-content">
            <img
              src="https://i.pinimg.com/originals/8b/44/51/8b4451665d6b2139e29f29b51ffb1829.png"
              alt="login"
              className="login-box__left-image"
            />
          </div>
        </div>
        <div className="login-box__right">
          <div className="login-box__right-content">
            <Form
              name="basic"
              initialValues={{ remember: true }}
              autoComplete="off"
              className="login-form-main form"
              layout="vertical"
              onFinish={onFinish}
            >
              <h1 className="login-box__title">Login</h1>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Input your username"
                  prefix={<MailOutlined className="left-icon" />}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="left-icon" />}
                  size="large"
                  placeholder="Input your password"
                />
              </Form.Item>
              <Form.Item>
                <Button className="button-login" htmlType='submit'>Login</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
