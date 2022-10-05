import { Col, Row } from "antd";

const HomePage = () => {
  return (
    <div className="home">
      <Row>
        <Col span={18}>
          <div className="home-main-item"></div>
          <div className="home-main-item"></div>
        </Col>
        <Col span={6}>
          <div className="home-sub-item"></div>
          <div className="home-sub-item"></div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
