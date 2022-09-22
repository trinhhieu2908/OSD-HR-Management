import { Col, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const changePage = (page: any) => {
        navigate("/" + page.key, { replace: true });
    }
    const menuItems = [
        {
            key: 'home',
            label: 'Home',
        },
        {
            key: 'people',
            label: 'People',
        },
        {
            key: 'activities',
            label: 'Activities',
        }
    ]
    return <div className="header">
        <Row>
            <Col span={4}>
                <div className="header-logo">Logo</div>
            </Col>
            <Col span={14}>
                <div className="header-menu">
                    <Menu
                        items={menuItems}
                        onClick={changePage}
                        mode="horizontal"
                        defaultSelectedKeys={['home']}
                    />
                </div>
            </Col>
            <Col span={6}>
                <div className="header-user">
                    <h3 className="header-user__name">Tran Trinh Hieu</h3>
                    <img className="header-user__avatar" src='https://i.pinimg.com/originals/8b/44/51/8b4451665d6b2139e29f29b51ffb1829.png' alt='avatar' />
                </div>
            </Col>
        </Row>
    </div>;
}

export default Header