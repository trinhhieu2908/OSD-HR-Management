import { Col, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const changePage = (page: any) => {
        navigate("/"+page.key, { replace: true });
    }
    return <div className="header">
        <Row>
            <Col span={4}>
                <div className="header-logo">Logo</div>
            </Col>
            <Col span={14}>
                <div className="header-menu">
                    <Menu onClick={changePage} mode="horizontal" defaultSelectedKeys={['home']}>
                        <Menu.Item key="home">
                            Home
                        </Menu.Item>
                        <Menu.Item key="people">
                            People
                        </Menu.Item>
                        <Menu.Item key="activities">
                            Activities
                        </Menu.Item>
                    </Menu>
                </div>
            </Col>
            <Col span={6}>
                <div className="header-user">
                    <h3 className="header-user__name">Tran Trinh Hieu</h3>
                    <img className="header-user__avatar" src='https://i.pinimg.com/originals/8b/44/51/8b4451665d6b2139e29f29b51ffb1829.png' alt='avatar'/>
                </div>
            </Col>
        </Row>
    </div>;
}

export default Header