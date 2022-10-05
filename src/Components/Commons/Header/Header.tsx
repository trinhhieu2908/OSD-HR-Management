import { Col, Menu, Row } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/images/logo-red.png';
import avatar from '../../../assets/images/avatar.png';
import { authenticationSelectors } from "../../Authentication/redux/selectors";

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

    const userInfo = useSelector(authenticationSelectors.getCurrentUser);

    return <div className="header">
        <Row>
            <Col span={5}>
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>
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
            <Col span={5}>
                <div className="header-user">
                    <h3 className="header-user__name">{userInfo.role}</h3>
                    <img className="header-user__avatar"
                        src={userInfo.avatar ? userInfo.avatar : avatar}
                        alt='avatar'
                    />
                </div>
            </Col>
        </Row>
    </div>;
}

export default Header