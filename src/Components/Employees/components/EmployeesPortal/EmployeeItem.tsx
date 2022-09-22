import { Col, Typography } from "antd";
import { Link } from "react-router-dom";
import avatar from "../../../../assets/ava.jpg";

type Props = {
  employee: {
    title: string;
    name: string;
    email: string;
    team: string;
    skype: string;
    phone: string;
  };
};
const EmployeeItem = ({ employee }: Props) => {
  return (
    <Col className="mt-3" lg={6} md={8} >
      <div className="employee-item">
        <img src={avatar} alt="" />
        <h6>
          <i className="fas fa-user mr-1"></i>
          {employee.title}
        </h6>
        <Typography.Paragraph
          style={{ marginBottom: 5 }}
          ellipsis={{ rows: 1 }}
        >
          <Link to="/">
            <i className="fal fa-envelope mr-1"></i>
            {employee.email}@orientsoftware.com
          </Link>
        </Typography.Paragraph>
		<Typography.Paragraph
          style={{ marginBottom: 5 }}
          ellipsis={{ rows: 1 }}
        >
          <p>
            <i className="fal fa-phone mr-1"></i>
            {employee.phone}
          </p>
        </Typography.Paragraph>
		<Typography.Paragraph
          style={{ marginBottom: 5 }}
          ellipsis={{ rows: 1 }}
        >
          <Link to="/">
            <i className="fab fa-skype mr-1"></i>
            {employee.skype}
          </Link>
        </Typography.Paragraph>
		<Typography.Paragraph
          style={{ marginBottom: 5 }}
          ellipsis={{ rows: 1 }}
        >
          <Link to="/">
            <i className="fas fa-users mr-1"></i>
            HCM-{employee.team}
          </Link>
        </Typography.Paragraph>
      </div>
    </Col>
  );
};

export default EmployeeItem;
