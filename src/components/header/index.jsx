import React from "react";

import styles from "./header.module.css";

import { Avatar, Divider, Image } from "antd";

const AppHeader = (props) => {
  return (
    <div
      style={{
        background: "#ffffff",
        height: 117,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "38px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.collapsed ? (
          <div className={styles.logoMini}>
            <Image src="/assets/iweb-logo-icon.svg" preview={false} />
          </div>
        ) : (
          <div className={styles.logo}>
            <Image src="/assets/logo-side-bar.svg" preview={false} />
          </div>
        )}
        <Divider
          type="vertical"
          style={{ height: 30, color: "#B5B5B780" }}
        ></Divider>
        <div
          style={{
            backgroundColor: "rgba(249, 158, 36, 0.1)",
            color: "#F99E24",
            padding: 7,
          }}
        >
          <span>Admin</span>
        </div>
      </div>
      <Avatar
        style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
        size="large"
        gap={0}
      >
        <Image width={38} src="/assets/avatar.svg" preview={false} />
      </Avatar>
    </div>
  );
};

export default AppHeader;
