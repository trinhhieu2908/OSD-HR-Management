import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <Row>
        <Col span={17}>
          <div className="home-main-item"></div>
          <div className="home-main-item"></div>
        </Col>
        <Col span={7}>
          <div className="home-sub-item">
            <div className="home-handbook">
              <div className="home-handbook__header">
                <span>ADMIN TOOLKIT</span>
              </div>
              <div className="home-handbook__content">
                <div className="home-handbook__content-item">
                  <Link to="/admin/user-management">
                    <i className="fas fa-users mr-1"></i>
                    User Management
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-sub-item">
            <div className="home-handbook">
              <div className="home-handbook__header">
                <span>EMPLOYEE TOOLKIT</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
