import styles from "./admin.module.css";
import { Avatar, Button, Card, Col, Image, Row } from "antd";
import AppLayout from "../../components/layout";
import { CalendarOutlined, RightOutlined } from "@ant-design/icons";
import ProjectCard from "../../components/project-card";

const projectCounts = [
  {
    title: "Projects Assigned",
    subTitle: "Total Numbers of projects assigned till now",
    value: 20,
  },
  {
    title: "Projects Completed",
    subTitle: "Total Numbers of projects assigned till now",
    value: 10,
  },
  {
    title: "Projects Pending",
    subTitle: "Total Numbers of projects assigned till now",
    value: 10,
  },
];

const onGoingProjectData = [
  {
    title: "Impulsive web Dashboard",
    status: [
      { bgColor: "#EB6A6A1A", color: "#EB6A6A", name: "HIGH" },
      { bgColor: "#9747FF1A", color: "#9747FF", name: "ONGOING" },
    ],
    date: "12/04/2022",
    members: ["a", "b", "c", "d"],
  },
  {
    title: "Gobble Cube",
    status: [
      { bgColor: "#EB6A6A1A", color: "#EB6A6A", name: "HIGH" },
      { bgColor: "#9747FF1A", color: "#9747FF", name: "ONGOING" },
    ],
    date: "12/04/2022",
    members: ["a", "b", "c", "d"],
  },
  {
    title: "Bizisell Dashboard",
    status: [
      { bgColor: "#EB6A6A1A", color: "#EB6A6A", name: "HIGH" },
      { bgColor: "#9747FF1A", color: "#9747FF", name: "ONGOING" },
    ],
    date: "12/04/2022",
    members: ["a", "b", "c", "d"],
  },
  {
    title: "Website Redesign",
    status: [
      { bgColor: "#EB6A6A1A", color: "#EB6A6A", name: "HIGH" },
      { bgColor: "#9747FF1A", color: "#9747FF", name: "ONGOING" },
    ],
    date: "12/04/2022",
    members: ["a", "b", "c", "d"],
  },
  {
    title: "Bizisell App",
    status: [
      { bgColor: "#EB6A6A1A", color: "#EB6A6A", name: "HIGH" },
      { bgColor: "#9747FF1A", color: "#9747FF", name: "ONGOING" },
    ],
    date: "12/04/2022",
    members: ["a", "b", "c", "d"],
  },
  {
    title: "Portfolio Website Design",
    status: [
      { bgColor: "#EB6A6A1A", color: "#EB6A6A", name: "HIGH" },
      { bgColor: "#9747FF1A", color: "#9747FF", name: "ONGOING" },
    ],
    date: "12/04/2022",
    members: ["a", "b", "c", "d"],
  },
];

const Admin = () => {
  return (
    <AppLayout
      children={
        <div className="admin">
          <div className="admin-container">
            <div className={styles.pageHeader}>
              <div>
                <div className={styles.pageTitle}>Hi, Rahul Singh</div>
                <div className={styles.pageSubTitle}>
                  Here is all your project details
                </div>
              </div>
              <div>
                <Button type="link" htmlType="button">
                  Create New Project <RightOutlined />
                </Button>
              </div>
            </div>
            <Image src="/assets/admin-graph.svg" preview={false} />
            <Row gutter={30} style={{ marginTop: 48 }}>
              {projectCounts.map((row) => {
                return (
                  <Col span={8}>
                    <Card style={{ height: 150 }}>
                      <div className={styles.countCardTitle}>{row.title}</div>
                      <div className={styles.countCardSubTitle}>
                        {row.subTitle}
                      </div>
                      <div className={styles.countCardNumber}>{row.value}</div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <div className={styles.ongoingProjectTitle}>Project Ongoing</div>
            <Row gutter={20} style={{ marginTop: 32 }}>
              <ProjectCard onGoingProjectData={onGoingProjectData} />
            </Row>
            <div></div>
          </div>
        </div>
      }
    ></AppLayout>
  );
};

export default Admin;
