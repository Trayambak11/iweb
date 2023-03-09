import {
  BellOutlined,
  CalendarOutlined,
  DatabaseOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Image, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import styles from "./side.module.css";

const AppSideBar = (props) => {
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed} theme="light">
      <div className={styles.collapsibleBtn}>
      <Button
        type="ghost"
        onClick={() => props.setCollapsed(!props.collapsed)}
        icon={props.collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
      ></Button>
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <DatabaseOutlined />,
            label: "Projects",
          },
          {
            key: "2",
            icon: <CalendarOutlined />,
            label: "Task",
          },
          {
            key: "3",
            icon: <ThunderboltOutlined />,
            label: "Home",
          },
          {
            key: "4",
            icon: <UserOutlined />,
            label: "Profile",
          },
          {
            key: "5",
            icon: <BellOutlined />,
            label: "Notifications",
          },
        ]}
      />
    </Sider>
  );
};

export default AppSideBar;
