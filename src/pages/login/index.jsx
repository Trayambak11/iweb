import styles from "./login.module.css";
import { Button, Divider, Form, Image, Input } from "antd";
import { RightOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("")
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <div className={styles.logoSection}>
          <Image
            width={485}
            height={70}
            src="/assets/iweb-logo.svg"
            preview={false}
          ></Image>
        </div>
        <Divider type="vertical" style={{ height: "100%", color: "#b5b5b7" }} />
        <div className={styles.loginSection}>
          <div className={styles.loginTitle}>Portal Login</div>
          <div className={styles.loginSubTitle}>
            Please enter your username or work email address
          </div>
          <Form
            name="basic"
            wrapperCol={{
              span: 24,
            }}
            style={{
              width: 485,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                placeholder="Employee ID or Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button
                className={styles.loginButton}
                type="primary"
                htmlType="submit"
              >
                Login Now <RightOutlined />
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
