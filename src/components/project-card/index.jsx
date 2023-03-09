
import { Avatar, Card, Col, Row } from "antd";
import styles from "./project-card.module.css"
import { CalendarOutlined } from "@ant-design/icons";

const ProjectCard = ({onGoingProjectData}) => {
    return  <Row gutter={20} style={{ marginTop: 32 }}> {onGoingProjectData.map((row) => {
        return (
           <Col style={{ marginBottom: 24 }} span={8}>
            <Card style={{ height: 180 }}>
              <div className={styles.ongoingCardTitle}>{row.title}</div>
              <div className={styles.onGoingStatusBox}>
                {row.status.map((ir) => {
                  return (
                    <div
                      className={styles.onGoingStatus}
                      style={{
                        backgroundColor: `${ir.bgColor}`,
                        color: `${ir.color}`,
                      }}
                    >
                      {ir.name}
                    </div>
                  );
                })}
              </div>
              <div className={styles.onGoingMembers}>
                <div>
                  <CalendarOutlined style={{ marginRight: 7 }} />
                  <span>{row.date}</span>
                </div>
                <div>
                  <Avatar.Group>
                    {row.members.map((ir) => (
                      <Avatar src="/assets/avatar.svg" />
                    ))}
                  </Avatar.Group>
                </div>
              </div>
            </Card>
          </Col>
        );
      })}</Row>
}

export default ProjectCard;